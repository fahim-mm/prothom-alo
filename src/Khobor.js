import Shironam from "./Shironam";
function Khobor({ news1, news2, news3 }) {
    return (
        <div className="h-2/6 flex flex-row">
            <Shironam url={news1.img} discription={news1.title} pera={news1.description} />
            <Shironam url={news2.img} discription={news2.title} pera={news2.description} />
            <Shironam url={news3.img} discription={news3.title} pera={news3.description} />
        </div>
    );
}

export default Khobor;