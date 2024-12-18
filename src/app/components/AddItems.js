'use client';
import { useRouter } from "next/navigation";

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
                <button className="view-button" onClick={returnHome}>Return Home</button>
            </div>
            <form action={addItem}>
                <input
                    type="text"
                    name="title"
                    placeholder="Title of Work"
                    required
                />
                <select name="type" id="type">
                    <option value={''}>Type of the work</option>
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
                <button type="submit">Add Item</button>
            </form>
        </div>
    )
}