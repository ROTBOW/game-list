

/**
 * Simple format for now, no need to complicate things
 * Game title: status
 * current supported status are:
 *  complete
 *  dropped
 *  current //there should only be one of these!
 *  planned
 */
const COMPLETE = 'complete';
const CURRENT = 'current';
const PLANNED = 'planned';
const DROPPED = 'dropped';

const games = {
    "Zelda - Twilight princess": COMPLETE,
    "Borderlands 2": COMPLETE,
    "Borderlands 3": COMPLETE,
    "battlefleet grothic - boom edition": CURRENT,
    'Dying light': DROPPED,
    'Dead Space 3': PLANNED,
    'Saints row 3 remastaterered': COMPLETE,
    'Divinity ordigaoinga sin (waifu edition)': COMPLETE,
    'Halo (1-4)': COMPLETE,
    'Space engineers': COMPLETE,
    'Diablo 2': DROPPED,
    'Diablo 3': PLANNED,
    'Elden Ring': PLANNED,
    'CSGO - Adventure Maps': COMPLETE,
    'Dead Space 1(screen share)': PLANNED,
    'Fossil Fighters Champions': PLANNED,
    'Monster Hunter World': PLANNED,
    'Skyward Sword(?)': PLANNED,
    'Spirit tracks': PLANNED,
    'Far cry 55': PLANNED
};

export default games;