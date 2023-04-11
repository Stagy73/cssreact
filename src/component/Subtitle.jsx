
import React, { useState } from 'react';

function Subtitle() {
    const [visibleIndexes, setVisibleIndexes] = useState([]);

    const Affiché = (index) => {
        if (visibleIndexes.includes(index)) {
            setVisibleIndexes(visibleIndexes.filter(i => i !== index));
        } else {
            setVisibleIndexes([...visibleIndexes, index]);
        }
    };

    return (
        <div>

            <ul className="ArtLi">
                <li><h2>Sur les traces d'un monde oublie </h2><button onClick={() => Affiché(1)}>Affiché
                </button>
                    {visibleIndexes.includes(1) && (<p style={{ display: visibleIndexes.includes(1) ? 'block' : 'none' }}>L'étude des mystères qui entourent les premiers peuplements a permis à Graham Hancock de constater que le genre Homo était probablement plus avancé durant la préhistoire que ce qui était jusqu'alors admis. Non seulement les savoir-faire de ces populations ont été sous-estimés par la recherche scientifique mais, en outre, ils leur auraient été légués par une civilisation plus avancée, capable de prouesses que les techniques modernes ne sauraient expliquer. Dans ce cas, pourquoi ne trouve-t-on pas trace d'une telle civilisation ? C'est à la fin de la dernière ère glaciaire, dans un événement cataclysmique d'ampleur planétaire, que se cachent d'après lui les éléments de réponse.</p>)}</li>



                <li><h2>Les civilisations englouties</h2><button onClick={() => Affiché(2)}>Affiché</button>{visibleIndexes.includes(2) && (<p style={{ display: visibleIndexes.includes(2) ? 'block' : 'none' }}>Depuis toujours, l'archéologue Graham Hancock se passionne pour l'origine de l'humanité. À ses yeux, les mythes et les légendes façonnés par les civilisations les plus anciennes puisent leurs sources dans des réalités historiques. Que s'est-il passé exactement sur la terre à la fin de l'ère glaciaire, lorsque le niveau des mers s'est mis à augmenter en submergeant des continents ? Pour lui, le doute n'est guère possible : des civilisations entières, dont on n'a pas encore retrouvé trace, ont été englouties.
                    Fort de cette conviction, il s'est donc muni de radars très puissants et des moyens d'investigation les plus modernes pour explorer pendant de longues années, avec une extrême minutie, le fond des mers et des océans. Ses conclusions sont stupéfiantes. Car, réfutant les assertions des archéologues les plus respectés, il a découvert de troublants vestiges aux emplacements mêmes où les mythes les plaçaient : dans la mer du Bengale et l'océan Indien, sur les côtes japonaises, en mer Méditerranée et dans l'océan Atlantique.
                    De quoi ébranler bien des idées reçues et remettre en cause les données scientifiques les plus communément admises.</p>)}</li>


                <li><h2>La clé de la civilisation perdue</h2><button onClick={() => Affiché(3)}>Affiché</button>{visibleIndexes.includes(3) && (<p style={{ display: visibleIndexes.includes(3) ? 'block' : 'none' }}>Malgré les avancées scientifiques, les origines de l'humanité restent couvertes de zones d'ombres. De l'Amazonie encore inexplorée au célèbre site d'Angkor Wat, des lignes de Nazca à Stonehenge, des terrassements américains aux pyramides égyptiennes, Graham Hancock part à la découverte des mystères qui entourent la Préhistoire et les premiers peuplements, accompagné des plus grands spécialistes.
                    Attentif à ne pas laisser les idées préconçues entraver sa recherche, il remet en cause les vérités établies et ouvre la porte à de nouvelles possibilités.</p>)}</li>

                <li><h2>
                    L'empreinte des dieux </h2><button onClick={() => Affiché(4)}>Affiché</button>{visibleIndexes.includes(4) && (<p style={{ display: visibleIndexes.includes(4) ? 'block' : 'none' }}>Du fond des âges, de mystérieux signes et écrits de toutes origines tentent de nous délivrer un message. Graham Hancock assemble, pièce après pièce, ce gigantesque puzzle regroupant les grands mystères du monde : les immenses dessins au sol de Nazca, les énigmatiques cartes médiévales de l'Antarctique libre des glaces, les pyramides d'Égypte et d'Amérique centrale et leurs corrélations mathématiques, pour n'en citer que quelques-uns.
                        Mais dans ce livre duquel on ne peut s'arracher, Hancock ne se limite pas à cette captivante démonstration. Il propose, ni plus ni moins, une nouvelle approche de l'histoire de l'Homme depuis les commencements. Il se lance sur la trace d'une civilisation primordiale d'un niveau scientifique et culturel très élevé, anéantie des milliers d'années avant la construction des pyramides d'Égypte dans une catastrophe apocalyptique appelée, si l'on en croit la périodicité fixe des cycles cosmiques, à se reproduire...</p>)}</li>
            </ul>

        </div >)

}

export default Subtitle;