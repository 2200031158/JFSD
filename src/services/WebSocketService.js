import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

class WebSocketService {
  constructor() {
    this.client = null;
  }

  connect(onMessageReceived) {
    // Create a SockJS client to connect to the WebSocket endpoint
    this.client = new Client({
      brokerURL: 'http://localhost:8080/ws', // Backend WebSocket endpoint
      connectHeaders: {},
      onConnect: () => {
        // Subscribe to the /topic/internships topic
        this.client.subscribe('/topic/internships', (message) => {
          const newInternship = JSON.parse(message.body);
          onMessageReceived(newInternship); // Callback function to handle new internship
        });
      },
      debug: (str) => {
        console.log(str); // Log WebSocket activity
      },
    });

    this.client.activate(); // Connect to WebSocket
  }

  disconnect() {
    if (this.client) {
      this.client.deactivate(); // Disconnect WebSocket
    }
  }
}

export default new WebSocketService();
