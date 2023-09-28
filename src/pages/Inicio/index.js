
import styles from './inicio.module.css';
import posts from 'json/posts.json'
import Post from "componentes/Post";

//utilizando absolute imports em jsconfig.json permite menos poluição na hora do import

export default function Inicio() {
  return (

      
      <ul className={styles.posts}>
        {posts.map((post) => (
          <li key={post.id}>
            <Post post={post}/>
          </li>
        ))}
      </ul>
    
  );
}
