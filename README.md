# Next JS Fundamental!

### Pages ?

    - Is router ,It's all comming out together with next js
    - Use react js as well cool fcking awesome

### Styling NextJs ?

    - make same name with css module
    - there's no class name Collision
        -  NavBar.module.css like this
        -  className={styles.nav} just put on the tag
    - multiple css ? need to add string literal or make array and use join methods (" ")

    - Jsx way awesome way clear to know styles
        - Scope only one file, awesome
        - <style jsx>{`string literal write css whatever i want`}</style> end tag

    - Global Style
        - <style jsx global> easy to type


    ##### App Component App Page Different.
        - Have to consider pages
        - App Component is blueprint to effect all pages _app.js is mendatory
            - _app.js has 2props ({component,pageProps})
            - > <Component {...pageProps} /> basic next js will render
            - can style override top on the componenent awesome
            - can import global css on _app.js file !!
                - import ".././etc...
            - aweeeeeeeeesooooommmmmee !!

### Tiny Project

    - 1. Make styles and set a header
        - Layout desgin is used to design next js comfortable like react
        - next/head component servered by NextJs lol cooooool

    - 2. Hide API Key
        - can figure on next.config.js with rewrites()

    - 3. Redirects is awesome !!!
        - can figure on next.config.js
        ```
        async rewrites() {
        const API_KEY = "hoithoit";
        return [{
            source: "/api/movies",
            destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
        },];
        },
        ```
        async redirects() {
            return [{
                source: "/old-blog/:path*",
                destination: "/new-sexy/:path*",
                permanent: false,
            }];
        },
        ```
    - 4. getServerSideProps Have to be this name
        - wowowowowowo export getServerSideProps() ? function ? will running on _app.js the prop sides

    - ! Have to choose wait for getting data api ? or just show loading page ?

    - 5. Dynamic Url
        - wanna join /movies/all ?
            - need to make a folder
