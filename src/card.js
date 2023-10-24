import React from "react";

export default function Card(props){
    return (
        <div className="contact-card">
        <img src={props.img} alt="cat"/>
        <h3>{props.name}</h3>
        <div className="info-group">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBCAMAAADQfiliAAAAZlBMVEX///8AAADz8/P5+fng4ODT09Pj4+Ozs7ONjY3X19fb29vn5+f8/Pzq6urNzc2np6fBwcFxcXFBQUF7e3tNTU1sbGxXV1eFhYWenp5fX185OTkODg4bGxtlZWUkJCSYmJgrKysyMjJ6P/eFAAADKUlEQVR4nO2a67KqMAyFSVFB8QKIeEG3+v4vebyejZi0OG2Xs2e6fjvDZ5umyUqjKCgoKOhvSA3ydFXX69l3Ph8nRUV31dMvfH9YUEspHmBNrxqAvx8XHQAqwATLLgDRGAqweQegLRJgzAAQ5TiAackS7HAncsECEC1QAFkjEBCKgDkHD4HS0kRcAqIMQtBNhm0tEQBKA0A0BBBIB+GuCkBQaQko8Q6g3wSixjtBYiDwfyLlZPDU3C/AdGskKJVXArUzEnjeB/lOaMlrwTbqAUAbnwSDPgRec/P316APwd7rYZj9mAn8JgRluBbIf8G6+jZAlBoA/BcIQ+33K0D3GOsACr9XwkMHGeCI+L6uSkN1bZnw/cZzXdAS3zRCquSH+DrNf4X6q9mJASiBAFH0ZuBcdIASzBmCHZRAcbEIDMSIvxugLhJfqmEXgduGCurrspkZ5iJdxbavP1B/ne0e10gCvk6B+rpsAwtNS1xexAaj0MWPgAj8IkAvKH4RQKXiTUIXjavVJG91H+MI1JlFWOEIopzfB2QoCM4eMCvEex4BOHDikwJ0+in08s0ERjAV+tgzDiETfKUT7qaWHI0+GzF2Ey9iN286Edd0sndycsXJlz41He8/qhxEjGz4LzV3xP9T1DhYBraLu/9Bcf7Y3rvaPhyUkBtJtBU6HsTSutCfyAisvfaWS/cbWxduLg8+zu9nghvUlIll1yfc1Pdl6AZkzf6ssux9pUvqptdwF4/vwe5k6laBytZWcG9YnrILSf0stJj1+pldSGpX4Zki9YPzi35sfEG9735prvOcD8JX1RbLMJfzwic6WFT8Q87t/Fw27efICYJVAyy8lgISMK/2PtbZ9qI62hJsrY1BQ2IwysHcOrMLBhezCmV+LKKRG2PS+GJG1smRP5yZJ9SC3DmjSZ8XI4wcuvSZ+eEOI7cjq/z8OYFrL8xYD3Tl/glJvPloHbxYQCrpfSwaX4PT6dz4dOOm0qfroBbmhfD6iuiqLNVeFyvElEjNC6mGOsCmhbOES1NL7MP/OE/bMbFb50A3/FfjfJOu02My/MrXg4KCgoKCgoL+vP4BB94iDmEdH0UAAAAASUVORK5CYII=" alt="phone" />
            <p>{props.phone}</p>
        </div>
        <div className="info-group">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAZlBMVEUAAAD///+EhITz8/Ph4eHDw8O8vLxNTU329vYtLS15eXkzMzMwMDBvb29/f3/8/Pzr6+sdHR3Kyso5OTkYGBjZ2dlpaWlHR0cQEBAICAiKioq2trYoKCirq6ufn58iIiJAQEBeXl7JJh1dAAADAElEQVRoge2a2XajMBBEW2FMMLZZbJLgNcz//+RAMhl1o8Xa50X1aOvoulFX0fgA7P8IMjdzMzdzMzdzMzdzU3G78nF5iavLo+xW3OMrpNFr2WJud0rEhZpwWbFLiuXnW22TYIW+YkUC8EHs5xm8T4dlUHTJKkZYBlfg4CpqcyHs5go1fP7iFUe0U42w8AIzaYvAUwJsCfAB5/mzXfyKmxZjof/+NDqYVsu15+Aqgp3I2RLdUFcHt9NBUe2iHvk4cMUHZbWLhlgBgrBH2fdDnAB5hgUcIFWwrla3FFeEAGk0LcW1D+3jVVwoFThAzKpdhAPEu6tVKSUTPmNPH+viQlQfysf6uBA1hEmu577VgN3P2B47g/0DxCQuRN187dQ4YWmATF5Yg07G8goQ05SSCVdseXeyiQtRW9fkcmspLhQgNjOXbVyIcgoQF99qwKaXOgTWIUB8z/ZHlgHiGheirCYQ97gQZREgIbEz+I2DtQESFkt6pboZLfPoZK4DD1udj/GfCEWAf+Hwfkw9+tBlrTf4nTET8OrXeYPX+zH5s1MtLvMCIyw/ZdFOjYj1qhjfWk5qH+OUOgYA0zuaMkCIbz+5210vNWqpL0Pu5BPIKi56BP7wrPZvDkifnYShZuSrXC71utpFN/ERRjJdeIHl9288gUzKZR5gWbWL0MzVXutmI1+GwVZnrJ5WEJiILjtzsE1X60ZCNIEw9bKBd7X5pdZPonsJWFzW24PR2W7Oku93Alg2S6EAMTvjd/1+QCaQL12lqywrVnUy1nhFs0BxUawabLraBDtrKovvDbtHr1x0NvexIXbR7+ZyqfXbGfvYAmskQ3BorCHY/wlSAn7e1TGwBnaKg6UBIgE/jwtXaSeQ8C3FNcgic4yOlQXICKf4WImdTtAkwIrgBsoUWHqpJ5ipbTQDUY1koG+BlW0KLLFTdSfv50TFkgAh7zNExtIAgXRYEiD/uNE6GYt39Q/3LQV27upuXW9X3qO/f3UX3r9KrszN3MzN3MzN3MzN3Nj6A88TNx9YBYKsAAAAAElFTkSuQmCC" alt="mail" />
            <p>{props.email}</p>
        </div>
    </div>
    
    )
}