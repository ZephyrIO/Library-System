'use client';
import { useRouter } from "next/navigation";
import './AddItems.css';

export default function AddItems ()
{
    const router = useRouter()
    
    function returnHome ()
    {
        router.push('/view');
    }

    function addItem ()
    {}

    return (
        <div>
            <div>
                <button className="home-button" onClick={returnHome}>Return Home</button>
                <h1 className="title">Add Item</h1>
            </div>
            <form className="add-item" action={addItem}>
                <input
                    type="text"
                    name="title"
                    placeholder="Title of Work"
                    required
                />
                <select name="type" id="type">
                    <option value={'null'}>Type of the work</option>
                    <option value={'book'}>Book</option>
                    <option value={'movie'}>Movie</option>
                    <option value={'video_game'}>Video Game</option>
                    <option value={'board_game'}>Board Game</option>
                    <option value={'music'}>Music</option>
                    <option value={'kit'}>Educational Kit</option>
                </select>
                <input
                    type="text"
                    name="creator"
                    placeholder="Creator of Work"
                    required
                />
                <input
                    type="date"
                    name="release_date"
                    required
                />
                <button className="submit" type="submit">Add</button>
            </form>
        </div>
    )
}