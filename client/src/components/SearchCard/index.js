import React from "react";
import M from "materialize-css";
import { CardPanel, TextInput, Button, Icon } from "react-materialize";

const SearchCard = () => {
    return (
        <CardPanel className="red lighten-5">
                <h6 className="red-text lighten-2">Book Search!</h6>
                <TextInput id="book-title" label="Book Title" />
                <div className="right-align">
                    <Button
                        node="button"
                        type="submit"
                        waves="light"
                        className="red lighten-2"
                    >Find Books!<Icon right>send</Icon>
                    </Button>
                </div>
            </CardPanel>
    )
}

export default SearchCard;