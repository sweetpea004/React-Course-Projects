export default function Section({ title, children, ...props }) {
    //note: "...props" forwards section elements eg. id, className, onClick etc.
    return (
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}