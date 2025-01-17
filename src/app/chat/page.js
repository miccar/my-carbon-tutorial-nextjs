'use client';
import React, { useState } from 'react';
import { Grid, Column } from '@carbon/react';
import axios from 'axios';
import token from './bearer.json';
export default function FormPage() {
  const [userInput, setUserInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-4o-mini', // Or "gpt-3.5-turbo"
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: userInput },
          ],
          max_tokens: 150,
          temperature: 0.7,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token.BEARER}`, // Replace with your actual API key
          },
        }
      );

      setResponse(result.data.choices[0].message.content);
    } catch (error) {
      console.error('Error communicating with ChatGPT API:', error);
      setResponse('Error: Unable to fetch response from ChatGPT.');
    }
  };

  return (
    <Grid className="repo-page">
      <Column lg={16} md={8} sm={4} className="repo-page__r1">
        <div>
          <form onSubmit={handleSubmit}>
            <textarea
              placeholder="Ask something..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              rows="10"
              cols="100"
            />
            <button type="submit">Send</button>
          </form>
          <div>
            <h3>Response:</h3>
            <p>{response}</p>
          </div>
        </div>
      </Column>
    </Grid>
  );
}
