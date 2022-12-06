# XharkTank
The backend of XharkTank where budding entrepreneurs can pitch ideas for a business or product they wish to develop by providing their name, title &amp; idea for the business, the investment amount they expect to be fulfilled, and the percentage of equity they are ready to shed away to the potential investors. 

## Objective
SharkTank is a panel of potential investors, termed as "Sharks", who listen to entrepreneurs pitch ideas for a business or product they wish to develop. These self-made multi-millionaires judge the business concepts and products pitched and then decide whether to invest their own money to help market and mentor each contestant.
We will be building a backend of XharkTank where budding entrepreneurs can pitch ideas for a business or product they wish to develop by providing their name, title & idea for the business, the investment amount they expect to be fulfilled, and the percentage of equity they are ready to shed away to the potential investors. Investors must be able to retrieve the list of all pitches and share their feedback/comments with a counter offer as per their interests. We will be implementing the GET/POST APIs required for the backend to function as per the requirements.

## Tech Stack Requirements and IDE
1️⃣ Node.js 14

2️⃣ MongoDB 4.2

    Make sure the MongoDB process is available for DB connection through localhost and default port 27017.

3️⃣ Postman

4️⃣ VSCode

## Product Flows
These are the mandatory product flows that are expected while building the backend for the XharkTank application:

  1. Entrepreneurs will post Pitch by providing these inputs

     ● Name of the entrepreneur posting the pitch

     ● Title of the pitch

     ● Business Idea for the Product they wish to develop

     ● Ask Expected Amount for investment

     ● Percentage of Equity to be diluted

  2. Investors will view all the latest pitches posted to date

     ● If the entrepreneurs post a new pitch, that should also get listed. Note that these submitted pitches will be shown one below the other.
     
  3. Investors will make a counteroffer to the pitch by providing these inputs

     ● Unique Id of the Pitch made by the entrepreneur

     ● Name of the investor making a counteroffer

     ● Amount ready to invest in the idea

     ● Ask Percentage of Equity for a company
    
## Mandatory API Requirements

The interaction between the frontend and backend shall be based on a REST API with support for the below 4 endpoints:

  1. Endpoint to post a pitch to the backend
  2. Endpoint to make a counter offer for a pitch to the backend
  3. Endpoint to fetch the all the pitches in the reverse chronological order ( i.e. last created one first ) from the backend
  4. Endpoint to specify a particular id (identifying the pitch) to fetch a single Pitch.

