<h1>L Wong Consulting Website</h1>
<h3>
The L Wong Consulting Website was created using React and Tree (My own data storage UI using firebase). 
</h3>

<p1>The website is split into divisions, each with its unique method of processing data injected from [Tree](https://github.com/Rio-Lv/Tree).</p1>

<p1>The information received is nested and the templates are automatically allocated based on how deep within the nest it sits. The ID's of each project or project group gives information on how to render it into the website.</p1>
  
<p1>If you wish to see the website please visit: https://lwongconsulting.com
 Or If you wish too see how to data was pushed onto firestore and firebase storage check out: https://github.com/Rio-Lv/Tree
</p1>

https://user-images.githubusercontent.com/68161803/165344297-532c59eb-6a17-4571-8a78-e5b282eb6f21.mp4


## Setup

1. **Install Node.js**
   - Use Node.js 16 for best compatibility. The project may fail to build under newer versions.

2. **Install dependencies**
   - Run `npm install --legacy-peer-deps` to bypass React peer dependency conflicts.
   - Alternatively, you can run `bun install`, but note that some postinstall scripts may be blocked. Use `bun pm untrusted` to review them if needed.

3. **Start the development server**
   - Execute `npm start` to launch the site locally.

4. **Create a production build**
   - Run `npm run build` to generate the optimized build in the `build/` directory.

