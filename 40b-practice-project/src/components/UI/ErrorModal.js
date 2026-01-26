import Button from "./Button";
import Card from "./Card";
import classes from './ErrorModal.module.css';

export default function ErrorModal({ title, message, close }) {

    return (
        <div>
            <div className={classes.backdrop}/>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={close}>Okay</Button>
                </footer>
            </Card>
        </div>
    );
}