import React from "react";
import M from "materialize-css";
import { CardPanel, TextInput, Button, Icon } from "react-materialize";

const SearchCard = ({q, getBooks, handleInputChange}) => {
    return (
        <CardPanel className="red lighten-5">
                <h6 className="red-text lighten-2">Book Search!</h6>
                <TextInput 
                id="Title" 
                label="Book Title" 
                value={q}
                name="q"
                onChange={(event)=>handleInputChange(event)}
                />
                <div className="right-align">
                    <Button
                        node="button"
                        type="submit"
                        waves="light"
                        className="red lighten-2"
                        onClick={()=>getBooks()}
                    >Find Books!<Icon right>send</Icon>
                    </Button>
                </div>
            </CardPanel>
    )
}

export default SearchCard;