import { Container } from './styles';
import editIMG from '../../assets/edit.svg'
import deleteIMG from '../../assets/delete.svg'
import completeIMG from '../../assets/complete.svg'

function Task(): JSX.Element {
  return (
    <Container>
      <div className="title">
        <h3>Title</h3>
      </div>
      <div className="functional-box">
        <button>
          <img src={deleteIMG} alt="Delete" />
        </button>
        <button>
          <img src={editIMG} alt="Edit" />
        </button>
        <button>
          <img src={completeIMG} alt="Complete" />
        </button>
      </div>
    </Container>
  );
}

export { Task };