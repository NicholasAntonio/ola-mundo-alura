
import styles from './inicio.module.css';
import posts from 'json/posts.json'
import PostCard from "componentes/PostCard";

//utilizando absolute imports em jsconfig.json permite menos poluição na hora do import

export default function Inicio() {
  return (

      
      <ul className={styles.posts}>
        {posts.map((post) => (
          <li key={post.id}>
            <PostCard post={post}/>
          </li>
        ))}
      </ul>
    
  );
}
