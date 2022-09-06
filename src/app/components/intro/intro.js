import styles from '../../../assets/css/styles.module.css';
import '../../../assets/css/styles.css';

const embeddedStyles = {
  color: 'blue',
  textTransform: 'lowercase',
  textDecoration: 'underline'
};

const name = 'World';
export const hello = <h1 style={{ color: 'green', textTransform: 'uppercase', textDecoration: 'underline' }}>Hello React Project!</h1>
export const greet = <h1 style={embeddedStyles}>Hello, { name }!</h1>
export const greetHello = (name) => {
  return ( <h1 className="greet">Greetings, { name }! Welcome to your first <span className={styles.groot}>React JS Project</span>.</h1> );
}
