const Rightbar = () => {
    return <div className = "rightbar" >
        <
        div className = "rightbarWrapper" > { user ? < ProfileRightbar / > : < HomeRightbar / > } <
        /div> <
        /div>
};

export default Rightbar;