function Buttons({filteredRoom}) {
    return(
        <div>
<button className="change" onClick={() => filteredRoom("bathroom")}>Bathroom</button>
<button className="change" onClick={() => filteredRoom("kitchen")}>Kitchen</button>
<button className="change" onClick={() => filteredRoom("living-room")}>Living Room</button>
<button className="change" onClick={() => filteredRoom("bedroom")}>Bedroom</button>
        </div>
    )
}
export default Buttons;