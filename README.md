## Next JS Fundamental!

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
