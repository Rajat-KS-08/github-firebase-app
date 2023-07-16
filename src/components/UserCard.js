import React from "react";
import { Card, CardBody } from "reactstrap";

const UserCard = (props) => {
    return(
        <Card className="text-center m-4">
            <img src={props.user.avatar_url} className="img-thumbnail" />
            <CardBody>
                <div className="text-primary">
                    <h3> Name : {props.user.name}</h3>
                </div>
                <div className="text-primary">
                    <h5> Followers : {props.user.followers}</h5>
                </div>
                <div className="text-info">
                    <p>{props.user.bio}</p>
                </div>
                <div className="text-success">
                    <h1>Is available for hire ? : {props.user.hireable ? "Yes" : "Nope"}</h1>
                </div>
            </CardBody>
        </Card>
    );
}

export default UserCard;