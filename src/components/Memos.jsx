import React, { useEffect } from 'react';
import { dbService } from "../fbase";

function Memos({ user = null, memos }) {

    useEffect(() => {
        console.log("user : ", user);
    }, []);

    const onDeleteClick = async (event) => {
        const { target: { name } } = event;

        const ok = window.confirm("Are you sure you want to delete this?");
        if (ok) {
            // delete 
            await dbService.doc(`memo/${name}`).delete();
        } else {
            //  non delete 
        }
    }
    return (
        <div>
            {memos.map((el) => {
                return <div key={el.id}>
                    <strong>{el.creator}</strong>
                    <br></br>
                    {el.text}
                    {Object.keys(user).length !== 0 &&
                        el.creatorId === user.multiFactor.user.uid &&
                        <button
                            style={{
                                border: "1px solid skyblue",
                                backgroundColor: "white"
                            }}
                            name={el.id}
                            onClick={onDeleteClick}
                        >
                            삭제
            </button>
                    }
                </div>
            })}
        </div>
    )
}

export default Memos
