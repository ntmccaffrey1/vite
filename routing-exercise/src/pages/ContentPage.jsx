import { useParams } from "react-router-dom";

const ContentPage = ({ data }) => {
    const { id } = useParams();
    const contentData = data.find(item => item.title.toLowerCase().replace(/\s+/g, '-') === id);

  return (
    <div className="ContentPage">
      <h1>{contentData.title}</h1>
      <p>{contentData.content}</p>
    </div>
  )
}

export default ContentPage;