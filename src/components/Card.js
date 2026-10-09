
const date = new Date();
const newdate = date.getDate();
const currentMonth = date.getMonth() + 1;
const currentYear = date.getFullYear();

function Card(props){
  const{titleText, descText} = props;
  return  <div class="card">
       <h2 class="cardTitle">{titleText}</h2>
       <h3 class="cardDesc">{descText}</h3>
       <p class="Time">{newdate + "/" + currentMonth + "/" + currentYear}</p>
    </div>
}
export default Card;