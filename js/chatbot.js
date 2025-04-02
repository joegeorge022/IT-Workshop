const chatbot = {
  init: function() {
    this.createChatbotUI();
    this.bindEvents();
  },

  createChatbotUI: function() {
    const chatbotContainer = document.createElement('div');
    chatbotContainer.className = 'chatbot-container';
    chatbotContainer.innerHTML = `
      <div class="chatbot-header">
        <h3><i class="fas fa-robot"></i> Web Dev Assistant</h3>
        <button class="chatbot-toggle"><i class="fas fa-times"></i></button>
      </div>
      <div class="chatbot-messages">
        <div class="message bot-message">
          <i class="fas fa-robot bot-icon"></i>
          <div class="message-content">
            <p>Hi there! I'm your Web Development Assistant. Ask me anything about HTML, CSS, JavaScript, or web development in general.</p>
          </div>
        </div>
      </div>
      <div class="chatbot-input">
        <textarea placeholder="Type your question here..." rows="1"></textarea>
        <button class="send-btn"><i class="fas fa-paper-plane"></i></button>
      </div>
    `;
    
    const chatbotButton = document.createElement('button');
    chatbotButton.className = 'chatbot-button';
    chatbotButton.innerHTML = '<i class="fas fa-comment-dots"></i>';
    
    document.body.appendChild(chatbotContainer);
    document.body.appendChild(chatbotButton);
  },

  bindEvents: function() {
    const chatbotButton = document.querySelector('.chatbot-button');
    const chatbotToggle = document.querySelector('.chatbot-toggle');
    const chatbotContainer = document.querySelector('.chatbot-container');
    const sendButton = document.querySelector('.send-btn');
    const textarea = document.querySelector('.chatbot-input textarea');
    
    chatbotButton.addEventListener('click', () => {
      chatbotContainer.classList.add('active');
      chatbotButton.style.display = 'none';
    });
    
    chatbotToggle.addEventListener('click', () => {
      chatbotContainer.classList.remove('active');
      chatbotButton.style.display = 'block';
    });
    
    sendButton.addEventListener('click', () => this.sendMessage());
    
    textarea.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        this.sendMessage();
      }
      
      textarea.style.height = 'auto';
      textarea.style.height = (textarea.scrollHeight) + 'px';
    });
    
    textarea.addEventListener('input', function() {
      this.style.height = 'auto';
      this.style.height = (this.scrollHeight) + 'px';
    });
  },

  sendMessage: async function() {
    const textarea = document.querySelector('.chatbot-input textarea');
    const messagesContainer = document.querySelector('.chatbot-messages');
    const userMessage = textarea.value.trim();
    
    if (!userMessage) return;
    
    messagesContainer.innerHTML += `
      <div class="message user-message">
        <div class="message-content">
          <p>${this.escapeHTML(userMessage)}</p>
        </div>
        <i class="fas fa-user user-icon"></i>
      </div>
    `;
    
    textarea.value = '';
    textarea.style.height = 'auto';
    
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    const loadingId = this.addLoadingIndicator(messagesContainer);
    
    try {
      const response = await this.callGroqAPI(userMessage);
      
      this.removeLoadingIndicator(loadingId);
      
      messagesContainer.innerHTML += `
        <div class="message bot-message">
          <i class="fas fa-robot bot-icon"></i>
          <div class="message-content">
            <p>${this.formatBotResponse(response)}</p>
          </div>
        </div>
      `;
      
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    } catch (error) {
      this.removeLoadingIndicator(loadingId);
      
      messagesContainer.innerHTML += `
        <div class="message bot-message">
          <i class="fas fa-robot bot-icon"></i>
          <div class="message-content">
            <p>Sorry, I encountered an error. Please try again later.</p>
          </div>
        </div>
      `;
      
      console.error('Chatbot error:', error);
    }
  },

  callGroqAPI: async function(message) {
    const API_KEY = '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';
    const API_URL = 'https://api.groq.com/openai/v1/chat/completions';
    
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'llama3-8b-8192',
          messages: [
            {
              role: 'system',
              content: 'You are a helpful web development assistant specialized in HTML, CSS, and JavaScript. Provide concise, accurate information about web development concepts. Include code examples when appropriate. Keep responses focused on web development topics only. If asked about other topics, politely redirect to web development. Format code examples with proper markdown syntax using ```language code blocks.'
            },
            {
              role: 'user',
              content: message
            }
          ],
          max_tokens: 800,
          temperature: 0.7
        })
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Groq API error:', errorData);
        throw new Error(`API error: ${response.status}`);
      }
      
      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error('Error calling Groq API:', error);
      throw error;
    }
  },

  addLoadingIndicator: function(container) {
    const loadingId = 'loading-' + Date.now();
    container.innerHTML += `
      <div id="${loadingId}" class="message bot-message loading">
        <i class="fas fa-robot bot-icon"></i>
        <div class="message-content">
          <div class="typing-indicator">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    `;
    
    container.scrollTop = container.scrollHeight;
    
    return loadingId;
  },

  removeLoadingIndicator: function(loadingId) {
    const loadingElement = document.getElementById(loadingId);
    if (loadingElement) {
      loadingElement.remove();
    }
  },

  formatBotResponse: function(response) {
    let formattedResponse = response
      .replace(/```([a-z]*)([\s\S]*?)```/g, '<pre><code class="language-$1">$2</code></pre>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\*([^*]+)\*/g, '<em>$1</em>')
      .replace(/\n/g, '<br>');
    
    return formattedResponse;
  },

  escapeHTML: function(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
};

document.addEventListener('DOMContentLoaded', function() {
  chatbot.init();
});