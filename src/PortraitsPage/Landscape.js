
import './portraitpage.scss'


export const Landscape = ({img}) => {
  return (
    <div className="landscape-photo">
        <img src={img} alt=""/>
    </div>
  );
};

export default Landscape;