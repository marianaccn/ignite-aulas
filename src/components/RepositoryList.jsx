import { RepositoryItem } from "./RespositoryItem";
import "../styles/repositories.scss";

const repository = {
  name: "unform",
  description: "Forms in React",
  link: "https://github.com/rocketseat",
};

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repostirórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}
