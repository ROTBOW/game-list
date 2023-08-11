import React, {useEffect, useState} from "react";
import GameItem from "../gameItem/gameItem";
import games from "../../games";
import './centerMenu.scss';

const CenterMenu = () => {
    const [loaded, setLoaded] = useState(false);
    const [curr, setCurr] = useState('');
    const [planned, setPlanned] = useState([]);
    const [complete, setComplete] = useState([]);
    const [dropped, setDropped] = useState([]);

    /* Hook is being used to initialize the state variables `curr`, `planned`,
    `complete`, `dropped`, and `loaded` when the component is first rendered. */
    useEffect(() => {
        let [p, c, d] = [[], [], []]; 
        for (let game in games) {
            let status = games[game]
            switch (status) {
                case "current":
                    setCurr(game)
                    break
                case "planned":
                    p.push(game)
                    break
                case "complete":
                    c.push(game)
                    break
                case "dropped":
                    d.push(game)
            };
        };
        setPlanned(p);
        setComplete(c);
        setDropped(d);
        setLoaded(true);
    }, [])



    if (!loaded) return <div>loading...</div>;
    return (
        <div className="center-menu">
            <div className="cm-topbox">
                <div className="cm-left">
                    <h2>Planned Games</h2>
                    {
                        planned.map((game) => <GameItem title={game} type='planned'/>)
                    }
                </div>
                <div className="cm-middle">
                    <h1>Current Game</h1>
                    {<GameItem title={curr} type={'current'}/>}
                </div>
                <div className="cm-right">
                    <h2>Completed Games</h2>
                    {
                        complete.map(game => <GameItem title={game} type="complete"/>)
                    }
                </div>
            </div>
            <div className="cm-bottombox">
                <h3>Dropped Games</h3>
                {
                    dropped.map(game => <GameItem title={game} type='dropped'/>)
                }
            </div>
        </div>
    )
}

export default CenterMenu;