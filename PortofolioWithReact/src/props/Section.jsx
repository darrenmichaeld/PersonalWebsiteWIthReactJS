export default function Section({children, title, ...elements}){
    return(
        // ...elements are for destructuring any elements inside the section (such as title, styling, etc)
       <section {...elements}>
        <h2>{title}</h2>
        {children}
       </section>

    );
}