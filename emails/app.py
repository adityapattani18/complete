import openai
import os
from dotenv import load_dotenv
import sys
load_dotenv()
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from models.openai.open_ai import GPT


# email_gpt = GPT(api_key=os.getenv("OPENAI_API_KEY"))

email_gpt = GPT(api_key=os.getenv("OPENAI_API_KEY"), default_model="gpt-4.1")
person_name = "Chad	Peterson"
company_name = "Port of Mobile"
linkedin = '''
Chad Peterson Peterson
Chad Peterson Peterson
Operations at Alabama State Port Authority

Alabama State Port Authority
Semmes, Alabama, United States  Contact info
2 connections

Connect

Message

More
ActivityActivity
2 followers2 followers

Chad Peterson hasn’t posted yet
Recent posts Chad Peterson shares will be displayed here.
Show all activity
ExperienceExperience
Port of Mobile logo
Operations
Operations
Alabama State Port AuthorityAlabama State Port Authority
InterestsInterests
CompaniesCompanies
Port of Mobile logo
Port of Mobile
Port of Mobile
7,141 followers7,141 followers

Follow
'''

brief = "City AI is a platform helps companies manage their supply chain GRC problems"

email_gpt_response = email_gpt.call(
    system_prompt="City AI is a platform helps companies manage their supply chain GRC problems",
    user_prompt=f"Write an email to the person {person_name}, {company_name}, {linkedin}, {brief}"
)


import pandas as pd

# Read the CSV file
df = pd.read_csv('icp.csv')

# Display the first few rows of the dataframe
print(df.head())


# response = client.chat.completions.create(
#     model="gpt-4.1",  # "gpt-4.1" isn't a valid model name
#     messages=[
#         {
#             "role": "user",
#             "content": "Write a one-sentence bedtime story about a unicorn."
#         }
#     ]
# )

# print(response.choices[0].message.content)

print(email_gpt_response)