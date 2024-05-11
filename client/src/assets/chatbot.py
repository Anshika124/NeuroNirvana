import os
import openai
from dotenv import load_dotenv, find_dotenv
import panel as pn

_ = load_dotenv(find_dotenv())  # Read local .env file
openai.api_key = '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'  # Replace with your OpenAI API key

# Function to get a completion from the GPT-3.5 Turbo model
def get_completion(prompt, model="gpt-3.5-turbo"):
    messages = [{"role": "user", "content": prompt}]
    response = openai.ChatCompletion.create(
        model=model,
        messages=messages,
        temperature=0,  # Set the degree of randomness of the model's output
    )
    return response.choices[0].message["content"]

# Define initial system and user messages
messages = [
    {'role': 'system', 'content': """
    You are a child psychologist, an automated service that assesses the mental health of students. 
    You assess their mental health by asking them questions related to their personal life every day.
    You first greet the user in a friendly manner, then ask them about how their daily life is going.
    You can ask them questions about their day, school life, academics, friends, parents, relationships, 
    any hardships they face lately, etc. You acknowledge their answers with a proper reply and ask them 
    follow-up questions to know more about their mental health.
    The conversation should be humanized as if the user is talking to a real human. You ask and reply 
    to the user until the user says goodbye, bye, etc. At the end, you summarize the conversation and 
    give results about the mental health status of the user.
    Also, give the final result about the problem you think the child is suffering from.
    Also Show the result in a positive way.
    Categorize results in one or more categores based on the conversation for the following categories:
    1) Anxiety
    2) Stress
    3) Food disorder
    4) Mood disorder
    5) Academic problem
    6) Relationship problem.
    At last, show the final category at last in which the result lies.
    """}]

# Define user input widget and callback
inp = pn.widgets.TextInput(value="Hi", placeholder='Enter text here…')

# Create a list to keep track of displayed messages
displayed_messages = []

# Define a function to collect and process messages
def collect_messages(event):
    if event.new and (event.obj == inp) and (event.name == 'value'):
        prompt = inp.value
        inp.value = ''
        
        # Append the user's input to the conversation context
        context.append({'role': 'user', 'content': f"{prompt}"})
        
        # Get a response from the chatbot based on the updated context
        response = get_completion_from_messages(context)
        
        # Display the conversation in the dashboard
        displayed_messages.append(f"User: {prompt}")
        displayed_messages.append(f"Assistant: {response}")
        conversation_text.object = '\n\n'.join(displayed_messages)

# Set up the dashboard with widgets and the conversation display
pn.extension()
context = messages  # Initialize the conversation with system messages

# Create a button to initiate the chat
button_conversation = pn.widgets.Button(name="Chat!")

# Bind the collect_messages function to the button
button_conversation.on_click(collect_messages)

# Create a text area to display the conversation
conversation_text = pn.pane.Markdown("", width=600, height=300)

# Create the chatbot dashboard
dashboard = pn.Column(
    inp,
    pn.Row(button_conversation),
    conversation_text,
)

# Listen for changes in the text input field
inp.param.watch(collect_messages, 'value')

# Display the chatbot dashboard
<<<<<<< HEAD
dashboard.servable()
=======
dashboard.servable()
>>>>>>> 8506f8bef9196fc84256cc537d2e992e34e32b8b
