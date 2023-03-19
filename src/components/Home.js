import Nav from "./Nav";
function Home() {
  return (
    <div className="text-center">
      <div className="nav-div">
        <Nav />
      </div>
      <div className="main-div">
        <h1>Welcome to React</h1>
        <p className="home-p">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta
          minus molestiae vel beatae natus eveniet ratione temporibus aperiam
          harum alias officiis assumenda officia quibusdam deleniti eos
          cupiditate dolore doloribus! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet
          ratione temporibus aperiam harum alias officiis assumenda officia
          quibusdam deleniti eos cupiditate dolore doloribus! Consequatur rerum
          amet fuga expedita sunt et tempora saepe? Iusto nihil explicabo
          perferendis quos provident delectus ducimus necessitatibus reiciendis
          optio tempora unde earum doloremque commodi laudantium ad nulla vel
          odio? Ad dolore dignissimos asperiores dicta facere optio quod commodi
          nam tempore recusandae. Rerum sed nulla eum vero expedita ex delectus
          voluptates rem at neque quos facere sequi unde optio aliquam!
        </p>
        <button className="home-btn">Explore More !!</button>
      </div>
    </div>
  );
}
export default Home;
