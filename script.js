// === LOCATIONS ===
// 📋 INSTRUCTIONS FOR INPUTTER.HTML
// 1. Open Inputter.html in a text editor
// 2. Find the "const locations = [" line (around line 250)
// 3. Replace the entire locations array with the one below
// 4. Find the "const connections = [" line (around line 400)
// 5. Replace the entire connections array with the one below
// 6. Save and reload Inputter.html

// ═══════════════════════════════════════════════════════

// === LOCATIONS ===
const locations = [
  {
    id: 'registrar',
    name: 'Registrar',
    type: 'office',
    x: 492,
    y: 615,
    floor: 'mainjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'accounting',
    name: 'Accounting',
    type: 'office',
    x: 490,
    y: 577,
    floor: 'mainjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'office1',
    name: 'Unknown Office',
    type: 'office',
    x: 859,
    y: 594,
    floor: 'mainjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'g1',
    name: 'G1',
    type: 'classroom',
    x: 482,
    y: 384,
    floor: 'mainjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'g2',
    name: 'G2',
    type: 'classroom',
    x: 490,
    y: 203,
    floor: 'mainjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'g4',
    name: 'G4',
    type: 'classroom',
    x: 806,
    y: 210,
    floor: 'mainjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'uniform',
    name: 'School Uniform',
    type: 'office',
    x: 622,
    y: 175,
    floor: 'mainjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'g3',
    name: 'G3',
    type: 'classroom',
    x: 629,
    y: 389,
    floor: 'mainjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'rest',
    name: 'Restroom',
    type: 'restroom',
    x: 935,
    y: 407,
    floor: 'mainjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'node-1',
    name: 'node-1',
    type: 'waypoint',
    x: 551,
    y: 700,
    floor: 'mainjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'node-2',
    name: 'node-2',
    type: 'waypoint',
    x: 550,
    y: 615,
    floor: 'mainjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'node-4',
    name: 'node-4',
    type: 'waypoint',
    x: 549,
    y: 348,
    floor: 'mainjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'node-5',
    name: 'node-5',
    type: 'waypoint',
    x: 547,
    y: 206,
    floor: 'mainjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'node-6',
    name: 'node-6',
    type: 'waypoint',
    x: 620,
    y: 208,
    floor: 'mainjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'node-7',
    name: 'node-7',
    type: 'waypoint',
    x: 629,
    y: 349,
    floor: 'mainjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'node-8',
    name: 'node-8',
    type: 'waypoint',
    x: 935,
    y: 349,
    floor: 'mainjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'node-9',
    name: 'node-9',
    type: 'waypoint',
    x: 546,
    y: 75,
    floor: 'mainjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'node-10',
    name: 'node-10',
    type: 'waypoint',
    x: 550,
    y: 575,
    floor: 'mainjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'node-11',
    name: 'node-11',
    type: 'waypoint',
    x: 549,
    y: 384,
    floor: 'mainjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'backstairs-1-pair',
    name: 'Back Stairs L1 (from mainjhs)',
    type: 'stairs',
    x: 602,
    y: 52,
    floor: 'groundjhsMap',
    view: 'groundjhs',
    connectsToFloor: 'mainjhsMap',
    connectsToView: 'mainjhs',
    floorDirection: 'both'
  },
  {
    id: 'backstairs-1',
    name: 'Back Stairs L1',
    type: 'stairs',
    x: 627,
    y: 75,
    floor: 'mainjhsMap',
    view: 'mainjhs',
    connectsToFloor: 'groundjhsMap',
    connectsToView: 'groundjhs',
    floorDirection: 'both'
  },
  {
    id: 'node-12',
    name: 'node-12',
    type: 'waypoint',
    x: 550,
    y: 700,
    floor: 'groundjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'library',
    name: 'Library',
    type: 'classroom',
    x: 490,
    y: 618,
    floor: 'groundjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'b1',
    name: 'Room B1',
    type: 'classroom',
    x: 492,
    y: 569,
    floor: 'groundjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'b2',
    name: 'Room B2',
    type: 'classroom',
    x: 493,
    y: 393,
    floor: 'groundjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'b3',
    name: 'Room B3',
    type: 'classroom',
    x: 494,
    y: 211,
    floor: 'groundjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'clinic',
    name: 'Clinic',
    type: 'classroom',
    x: 618,
    y: 177,
    floor: 'groundjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'b4',
    name: 'Room B4',
    type: 'classroom',
    x: 801,
    y: 210,
    floor: 'groundjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'jhscanteen',
    name: 'Ground Canteen',
    type: 'classroom',
    x: 623,
    y: 391,
    floor: 'groundjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'groundrest',
    name: 'Ground Restroom',
    type: 'restroom',
    x: 937,
    y: 405,
    floor: 'groundjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'hele',
    name: 'Hele Room',
    type: 'office',
    x: 865,
    y: 595,
    floor: 'groundjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'node-14',
    name: 'node-14',
    type: 'waypoint',
    x: 549,
    y: 619,
    floor: 'groundjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'node-15',
    name: 'node-15',
    type: 'waypoint',
    x: 549,
    y: 595,
    floor: 'groundjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'node-16',
    name: 'node-16',
    type: 'waypoint',
    x: 548,
    y: 568,
    floor: 'groundjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'node-17',
    name: 'node-17',
    type: 'waypoint',
    x: 548,
    y: 393,
    floor: 'groundjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'node-18',
    name: 'node-18',
    type: 'waypoint',
    x: 548,
    y: 354,
    floor: 'groundjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'node-19',
    name: 'node-19',
    type: 'waypoint',
    x: 623,
    y: 353,
    floor: 'groundjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'node-20',
    name: 'node-20',
    type: 'waypoint',
    x: 938,
    y: 354,
    floor: 'groundjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'node-21',
    name: 'node-21',
    type: 'waypoint',
    x: 547,
    y: 213,
    floor: 'groundjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'node-22',
    name: 'node-22',
    type: 'waypoint',
    x: 618,
    y: 212,
    floor: 'groundjhsMap',
    view: 'mainjhs'
  },
  {
    id: 'node-23',
    name: 'node-23',
    type: 'waypoint',
    x: 547,
    y: 52,
    floor: 'groundjhsMap',
    view: 'mainjhs'
  },
  {
    id: '201',
    name: 'Room 201',
    type: 'classroom',
    x: 870,
    y: 602,
    floor: 'mainjhs-secondMap',
    view: 'mainjhs-second'
  },
  {
    id: '202',
    name: 'Room 202',
    type: 'classroom',
    x: 490,
    y: 623,
    floor: 'mainjhs-secondMap',
    view: 'mainjhs-second'
  },
  {
    id: '203',
    name: 'Room 203',
    type: 'classroom',
    x: 489,
    y: 570,
    floor: 'mainjhs-secondMap',
    view: 'mainjhs-second'
  },
  {
    id: '204',
    name: 'Room 204',
    type: 'classroom',
    x: 493,
    y: 385,
    floor: 'mainjhs-secondMap',
    view: 'mainjhs-second'
  },
  {
    id: '205',
    name: 'Room 205',
    type: 'classroom',
    x: 493,
    y: 206,
    floor: 'mainjhs-secondMap',
    view: 'mainjhs-second'
  },
  {
    id: 'guidance-office',
    name: 'Guidance Office',
    type: 'classroom',
    x: 748,
    y: 177,
    floor: 'mainjhs-secondMap',
    view: 'mainjhs-second'
  },
  {
    id: 'jhslab',
    name: 'Laboratory (JHS)',
    type: 'classroom',
    x: 802,
    y: 213,
    floor: 'mainjhs-secondMap',
    view: 'mainjhs-second'
  },
  {
    id: 'comlab',
    name: 'Computer Laboratory',
    type: 'classroom',
    x: 627,
    y: 393,
    floor: 'mainjhs-secondMap',
    view: 'mainjhs-second'
  },
  {
    id: 'secondrest',
    name: 'Restroom Second Floor',
    type: 'restroom',
    x: 936,
    y: 410,
    floor: 'mainjhs-secondMap',
    view: 'mainjhs-second'
  },
  {
    id: 'node-85',
    name: 'Back Stairs L2',
    type: 'stairs',
    x: 602,
    y: 52,
    floor: 'mainjhsMap',
    view: 'mainjhs',
    connectsToFloor: 'mainjhs-secondMap',
    connectsToView: 'mainjhs-second'
  },
  {
    id: 'node-85-pair',
    name: 'Back Stairs L2 (from mainjhs)',
    type: 'stairs',
    x: 637,
    y: 72,
    floor: 'mainjhs-secondMap',
    view: 'mainjhs-second',
    connectsToFloor: 'mainjhsMap',
    connectsToView: 'mainjhs',
    floorDirection: 'both'
  },
  {
    id: 'node-90',
    name: 'node-90',
    type: 'waypoint',
    x: 546,
    y: 623,
    floor: 'mainjhs-secondMap',
    view: 'mainjhs-second',
    connectsToFloor: 'mainjhs-secondMap',
    connectsToView: 'mainjhs-second'
  },
  {
    id: 'node-91',
    name: 'node-91',
    type: 'waypoint',
    x: 546,
    y: 599,
    floor: 'mainjhs-secondMap',
    view: 'mainjhs-second',
    connectsToFloor: 'mainjhs-secondMap',
    connectsToView: 'mainjhs-second'
  },
  {
    id: 'node-92',
    name: 'node-92',
    type: 'waypoint',
    x: 546,
    y: 570,
    floor: 'mainjhs-secondMap',
    view: 'mainjhs-second',
    connectsToFloor: 'mainjhs-secondMap',
    connectsToView: 'mainjhs-second'
  },
  {
    id: 'node-93',
    name: 'node-93',
    type: 'waypoint',
    x: 547,
    y: 385,
    floor: 'mainjhs-secondMap',
    view: 'mainjhs-second',
    connectsToFloor: 'mainjhs-secondMap',
    connectsToView: 'mainjhs-second'
  },
  {
    id: 'node-94',
    name: 'node-94',
    type: 'waypoint',
    x: 547,
    y: 349,
    floor: 'mainjhs-secondMap',
    view: 'mainjhs-second',
    connectsToFloor: 'mainjhs-secondMap',
    connectsToView: 'mainjhs-second'
  },
  {
    id: 'node-95',
    name: 'node-95',
    type: 'waypoint',
    x: 627,
    y: 351,
    floor: 'mainjhs-secondMap',
    view: 'mainjhs-second',
    connectsToFloor: 'mainjhs-secondMap',
    connectsToView: 'mainjhs-second'
  },
  {
    id: 'node-96',
    name: 'node-96',
    type: 'waypoint',
    x: 937,
    y: 349,
    floor: 'mainjhs-secondMap',
    view: 'mainjhs-second',
    connectsToFloor: 'mainjhs-secondMap',
    connectsToView: 'mainjhs-second'
  },
  {
    id: 'node-97',
    name: 'node-97',
    type: 'waypoint',
    x: 547,
    y: 210,
    floor: 'mainjhs-secondMap',
    view: 'mainjhs-second',
    connectsToFloor: 'mainjhs-secondMap',
    connectsToView: 'mainjhs-second'
  },
  {
    id: 'node-98',
    name: 'node-98',
    type: 'waypoint',
    x: 744,
    y: 214,
    floor: 'mainjhs-secondMap',
    view: 'mainjhs-second',
    connectsToFloor: 'mainjhs-secondMap',
    connectsToView: 'mainjhs-second'
  },
  {
    id: 'node-99',
    name: 'node-99',
    type: 'waypoint',
    x: 542,
    y: 74,
    floor: 'mainjhs-secondMap',
    view: 'mainjhs-second',
    connectsToFloor: 'mainjhs-secondMap',
    connectsToView: 'mainjhs-second'
  },
  {
    id: 'node-100',
    name: 'node-100',
    type: 'waypoint',
    x: 547,
    y: 704,
    floor: 'mainjhs-secondMap',
    view: 'mainjhs-second',
    connectsToFloor: 'mainjhs-secondMap',
    connectsToView: 'mainjhs-second'
  },
  {
    id: 'node-101',
    name: 'node-101',
    type: 'waypoint',
    x: 573,
    y: 74,
    floor: 'mainjhsMap',
    view: 'mainjhs',
    connectsToFloor: 'mainjhs-secondMap',
    connectsToView: 'mainjhs-second'
  },
  {
    id: 'node-102',
    name: 'node-102',
    type: 'waypoint',
    x: 573,
    y: 50,
    floor: 'mainjhsMap',
    view: 'mainjhs',
    connectsToFloor: 'mainjhs-secondMap',
    connectsToView: 'mainjhs-second'
  },
  {
    id: 'node-103',
    name: 'Ground Stairs',
    type: 'stairs',
    x: 590,
    y: 700,
    floor: 'groundjhsMap',
    view: 'groundjhs',
    connectsToFloor: 'mainjhsMap',
    connectsToView: 'mainjhs'
  },
  {
    id: 'node-103-pair',
    name: 'Ground Stairs (from groundjhs)',
    type: 'stairs',
    x: 797,
    y: 673,
    floor: 'mainjhsMap',
    view: 'mainjhs',
    connectsToFloor: 'groundjhsMap',
    connectsToView: 'groundjhs',
    floorDirection: 'both'
  },
  {
    id: 'node-104',
    name: 'node-104',
    type: 'waypoint',
    x: 796,
    y: 595,
    floor: 'mainjhsMap',
    view: 'mainjhs',
    connectsToFloor: 'mainjhsMap',
    connectsToView: 'mainjhs'
  },
  {
    id: 'node-105',
    name: 'node-105',
    type: 'waypoint',
    x: 551,
    y: 594,
    floor: 'mainjhsMap',
    view: 'mainjhs',
    connectsToFloor: 'mainjhsMap',
    connectsToView: 'mainjhs'
  },
  {
    id: 'node-106',
    name: 'Ground Stairs (from groundjhs)',
    type: 'stairs',
    x: 602,
    y: 699,
    floor: 'mainjhsMap',
    view: 'mainjhs',
    connectsToFloor: 'mainjhs-secondMap',
    connectsToView: 'mainjhs-second'
  },
  {
    id: 'node-106-pair',
    name: 'Ground Stairs (from groundjhs) (from mainjhs)',
    type: 'stairs',
    x: 802,
    y: 667,
    floor: 'mainjhs-secondMap',
    view: 'mainjhs-second',
    connectsToFloor: 'mainjhsMap',
    connectsToView: 'mainjhs',
    floorDirection: 'both'
  },
  {
    id: 'node-107',
    name: 'node-107',
    type: 'waypoint',
    x: 801,
    y: 604,
    floor: 'mainjhs-secondMap',
    view: 'mainjhs-second',
    connectsToFloor: 'mainjhs-secondMap',
    connectsToView: 'mainjhs-second'
  },
  {
    id: '301',
    name: 'Room 301',
    type: 'classroom',
    x: 865,
    y: 604,
    floor: 'mainjhs-thirdMap',
    view: 'mainjhs-third',
    connectsToFloor: 'mainjhs-secondMap',
    connectsToView: 'mainjhs-second'
  },
  {
    id: '302',
    name: 'Room 302',
    type: 'classroom',
    x: 485,
    y: 623,
    floor: 'mainjhs-thirdMap',
    view: 'mainjhs-third',
    connectsToFloor: 'mainjhs-secondMap',
    connectsToView: 'mainjhs-second'
  },
  {
    id: '303',
    name: 'Room 303',
    type: 'classroom',
    x: 485,
    y: 570,
    floor: 'mainjhs-thirdMap',
    view: 'mainjhs-third',
    connectsToFloor: 'mainjhs-secondMap',
    connectsToView: 'mainjhs-second'
  },
  {
    id: '304',
    name: 'Room 304',
    type: 'classroom',
    x: 482,
    y: 392,
    floor: 'mainjhs-thirdMap',
    view: 'mainjhs-third',
    connectsToFloor: 'mainjhs-secondMap',
    connectsToView: 'mainjhs-second'
  },
  {
    id: '305',
    name: 'Room 305',
    type: 'classroom',
    x: 488,
    y: 207,
    floor: 'mainjhs-thirdMap',
    view: 'mainjhs-third',
    connectsToFloor: 'mainjhs-secondMap',
    connectsToView: 'mainjhs-second'
  },
  {
    id: 'principal-office',
    name: 'Principals Office',
    type: 'office',
    x: 750,
    y: 179,
    floor: 'mainjhs-thirdMap',
    view: 'mainjhs-third',
    connectsToFloor: 'mainjhs-secondMap',
    connectsToView: 'mainjhs-second'
  },
  {
    id: '307',
    name: 'Room 307',
    type: 'classroom',
    x: 810,
    y: 206,
    floor: 'mainjhs-thirdMap',
    view: 'mainjhs-third',
    connectsToFloor: 'mainjhs-secondMap',
    connectsToView: 'mainjhs-second'
  },
  {
    id: '306',
    name: 'Room 306',
    type: 'classroom',
    x: 633,
    y: 392,
    floor: 'mainjhs-thirdMap',
    view: 'mainjhs-third',
    connectsToFloor: 'mainjhs-secondMap',
    connectsToView: 'mainjhs-second'
  },
  {
    id: 'thirdrest',
    name: 'Restroom Third Floor',
    type: 'restroom',
    x: 936,
    y: 429,
    floor: 'mainjhs-thirdMap',
    view: 'mainjhs-third'
  },
  {
    id: 'node-109',
    name: 'node-109',
    type: 'waypoint',
    x: 548,
    y: 699,
    floor: 'mainjhs-thirdMap',
    view: 'mainjhs-third'
  },
  {
    id: 'node-110',
    name: 'node-110',
    type: 'waypoint',
    x: 549,
    y: 625,
    floor: 'mainjhs-thirdMap',
    view: 'mainjhs-third'
  },
  {
    id: 'node-111',
    name: 'node-111',
    type: 'waypoint',
    x: 548,
    y: 601,
    floor: 'mainjhs-thirdMap',
    view: 'mainjhs-third'
  },
  {
    id: 'node-112',
    name: 'node-112',
    type: 'waypoint',
    x: 549,
    y: 570,
    floor: 'mainjhs-thirdMap',
    view: 'mainjhs-third'
  },
  {
    id: 'node-113',
    name: 'node-113',
    type: 'waypoint',
    x: 800,
    y: 603,
    floor: 'mainjhs-thirdMap',
    view: 'mainjhs-third'
  },
  {
    id: 'node-114',
    name: 'node-114',
    type: 'waypoint',
    x: 550,
    y: 393,
    floor: 'mainjhs-thirdMap',
    view: 'mainjhs-third'
  },
  {
    id: 'node-115',
    name: 'node-115',
    type: 'waypoint',
    x: 549,
    y: 357,
    floor: 'mainjhs-thirdMap',
    view: 'mainjhs-third'
  },
  {
    id: 'node-116',
    name: 'node-116',
    type: 'waypoint',
    x: 634,
    y: 358,
    floor: 'mainjhs-thirdMap',
    view: 'mainjhs-third'
  },
  {
    id: 'node-117',
    name: 'node-117',
    type: 'waypoint',
    x: 936,
    y: 361,
    floor: 'mainjhs-thirdMap',
    view: 'mainjhs-third'
  },
  {
    id: 'node-118',
    name: 'node-118',
    type: 'waypoint',
    x: 550,
    y: 208,
    floor: 'mainjhs-thirdMap',
    view: 'mainjhs-third'
  },
  {
    id: 'node-119',
    name: 'node-119',
    type: 'waypoint',
    x: 749,
    y: 206,
    floor: 'mainjhs-thirdMap',
    view: 'mainjhs-third'
  },
  {
    id: 'node-120',
    name: 'node-120',
    type: 'waypoint',
    x: 548,
    y: 72,
    floor: 'mainjhs-thirdMap',
    view: 'mainjhs-third'
  },
  {
    id: 'stairs-3',
    name: 'Third Stair',
    type: 'stairs',
    x: 597,
    y: 705,
    floor: 'mainjhs-secondMap',
    view: 'mainjhs-second',
    connectsToFloor: 'mainjhs-thirdMap',
    connectsToView: 'mainjhs-third'
  },
  {
    id: 'stairs-3-pair',
    name: 'Third Stair (from mainjhs-second)',
    type: 'stairs',
    x: 800,
    y: 673,
    floor: 'mainjhs-thirdMap',
    view: 'mainjhs-third',
    connectsToFloor: 'mainjhs-secondMap',
    connectsToView: 'mainjhs-second',
    floorDirection: 'both'
  },
  {
    id: 'node-121',
    name: 'node-121',
    type: 'waypoint',
    x: 576,
    y: 74,
    floor: 'mainjhs-thirdMap',
    view: 'mainjhs-third'
  },
  {
    id: 'node-122',
    name: 'node-122',
    type: 'waypoint',
    x: 575,
    y: 47,
    floor: 'mainjhs-thirdMap',
    view: 'mainjhs-third'
  },
  {
    id: 'backstairs-2',
    name: 'Back Stairs L2',
    type: 'stairs',
    x: 606,
    y: 50,
    floor: 'mainjhs-secondMap',
    view: 'mainjhs-second',
    connectsToFloor: 'mainjhs-thirdMap',
    connectsToView: 'mainjhs-third'
  },
  {
    id: 'backstairs-2-pair',
    name: 'Back Stairs L2 (from mainjhs-second)',
    type: 'stairs',
    x: 631,
    y: 74,
    floor: 'mainjhs-thirdMap',
    view: 'mainjhs-third',
    connectsToFloor: 'mainjhs-secondMap',
    connectsToView: 'mainjhs-second',
    floorDirection: 'both'
  },
  {
    id: 'node-126',
    name: 'node-126',
    type: 'waypoint',
    x: 574,
    y: 50,
    floor: 'mainjhs-secondMap',
    view: 'mainjhs-second',
    connectsToFloor: 'mainjhs-thirdMap',
    connectsToView: 'mainjhs-third'
  },
  {
    id: 'node-127',
    name: 'node-127',
    type: 'waypoint',
    x: 575,
    y: 72,
    floor: 'mainjhs-secondMap',
    view: 'mainjhs-second',
    connectsToFloor: 'mainjhs-thirdMap',
    connectsToView: 'mainjhs-third'
  },
  {
    id: 'stairs-4',
    name: 'Fourth Stair',
    type: 'stairs',
    x: 598,
    y: 698,
    floor: 'mainjhs-thirdMap',
    view: 'mainjhs-third',
    connectsToFloor: 'mainjhs-fourthMap',
    connectsToView: 'mainjhs-fourth'
  },
  {
    id: '402',
    name: 'Room 402',
    type: 'classroom',
    x: 492,
    y: 615,
    floor: 'mainjhs-fourthMap',
    view: 'mainjhs-fourth'
  },
  {
    id: '403',
    name: 'Room 403',
    type: 'classroom',
    x: 490,
    y: 577,
    floor: 'mainjhs-fourthMap',
    view: 'mainjhs-fourth'
  },
  {
    id: '401',
    name: 'Room 401',
    type: 'classroom',
    x: 859,
    y: 594,
    floor: 'mainjhs-fourthMap',
    view: 'mainjhs-fourth'
  },
  {
    id: '404',
    name: 'Room 404',
    type: 'classroom',
    x: 482,
    y: 384,
    floor: 'mainjhs-fourthMap',
    view: 'mainjhs-fourth'
  },
  {
    id: '405',
    name: 'Room 405',
    type: 'classroom',
    x: 490,
    y: 203,
    floor: 'mainjhs-fourthMap',
    view: 'mainjhs-fourth'
  },
  {
    id: '407',
    name: 'Room 407',
    type: 'classroom',
    x: 806,
    y: 210,
    floor: 'mainjhs-fourthMap',
    view: 'mainjhs-fourth'
  },
  {
    id: 'faculty-4',
    name: 'School Faculty 4',
    type: 'office',
    x: 747,
    y: 178,
    floor: 'mainjhs-fourthMap',
    view: 'mainjhs-fourth'
  },
  {
    id: '406',
    name: 'Room 406',
    type: 'classroom',
    x: 629,
    y: 389,
    floor: 'mainjhs-fourthMap',
    view: 'mainjhs-fourth'
  },
  {
    id: 'node-1-mainjhsfourth',
    name: 'node-1',
    type: 'waypoint',
    x: 551,
    y: 700,
    floor: 'mainjhs-fourthMap',
    view: 'mainjhs-fourth'
  },
  {
    id: 'node-2-mainjhsfourth',
    name: 'node-2',
    type: 'waypoint',
    x: 550,
    y: 615,
    floor: 'mainjhs-fourthMap',
    view: 'mainjhs-fourth'
  },
  {
    id: 'node-4-mainjhsfourth',
    name: 'node-4',
    type: 'waypoint',
    x: 549,
    y: 348,
    floor: 'mainjhs-fourthMap',
    view: 'mainjhs-fourth'
  },
  {
    id: 'node-5-mainjhsfourth',
    name: 'node-5',
    type: 'waypoint',
    x: 547,
    y: 206,
    floor: 'mainjhs-fourthMap',
    view: 'mainjhs-fourth'
  },
  {
    id: 'node-6-mainjhsfourth',
    name: 'node-6',
    type: 'waypoint',
    x: 745,
    y: 210,
    floor: 'mainjhs-fourthMap',
    view: 'mainjhs-fourth'
  },
  {
    id: 'node-7-mainjhsfourth',
    name: 'node-7',
    type: 'waypoint',
    x: 629,
    y: 349,
    floor: 'mainjhs-fourthMap',
    view: 'mainjhs-fourth'
  },
  {
    id: 'node-8-mainjhsfourth',
    name: 'node-8',
    type: 'waypoint',
    x: 935,
    y: 349,
    floor: 'mainjhs-fourthMap',
    view: 'mainjhs-fourth'
  },
  {
    id: 'node-9-mainjhsfourth',
    name: 'node-9',
    type: 'waypoint',
    x: 546,
    y: 75,
    floor: 'mainjhs-fourthMap',
    view: 'mainjhs-fourth'
  },
  {
    id: 'node-10-mainjhsfourth',
    name: 'node-10',
    type: 'waypoint',
    x: 550,
    y: 575,
    floor: 'mainjhs-fourthMap',
    view: 'mainjhs-fourth'
  },
  {
    id: 'node-11-mainjhsfourth',
    name: 'node-11',
    type: 'waypoint',
    x: 549,
    y: 384,
    floor: 'mainjhs-fourthMap',
    view: 'mainjhs-fourth'
  },
  {
    id: 'node-101-mainjhsfourth',
    name: 'node-101',
    type: 'waypoint',
    x: 573,
    y: 74,
    floor: 'mainjhs-fourthMap',
    view: 'mainjhs-fourth'
  },
  {
    id: 'node-102-mainjhsfourth',
    name: 'node-102',
    type: 'waypoint',
    x: 573,
    y: 50,
    floor: 'mainjhs-fourthMap',
    view: 'mainjhs-fourth'
  },
  {
    id: 'node-104-mainjhsfourth',
    name: 'node-104',
    type: 'waypoint',
    x: 796,
    y: 595,
    floor: 'mainjhs-fourthMap',
    view: 'mainjhs-fourth'
  },
  {
    id: 'node-105-mainjhsfourth',
    name: 'node-105',
    type: 'waypoint',
    x: 551,
    y: 594,
    floor: 'mainjhs-fourthMap',
    view: 'mainjhs-fourth'
  },
  {
    id: 'fourthrest',
    name: 'Restroom Fourth Floor',
    type: 'restroom',
    x: 938,
    y: 414,
    floor: 'mainjhs-fourthMap',
    view: 'mainjhs-fourth'
  },
  {
    id: 'backstairs-3',
    name: 'Back Stairs L3',
    type: 'stairs',
    x: 607,
    y: 49,
    floor: 'mainjhs-thirdMap',
    view: 'mainjhs-third',
    connectsToFloor: 'mainjhs-fourthMap',
    connectsToView: 'mainjhs-fourth'
  },
  {
    id: 'backstairs-3-pair',
    name: 'Back Stairs L3 (from mainjhs-third)',
    type: 'stairs',
    x: 630,
    y: 74,
    floor: 'mainjhs-fourthMap',
    view: 'mainjhs-fourth',
    connectsToFloor: 'mainjhs-thirdMap',
    connectsToView: 'mainjhs-third',
    floorDirection: 'both'
  },
  {
    id: 'backstairs-4',
    name: 'Back Stairs L4',
    type: 'stairs',
    x: 613,
    y: 49,
    floor: 'mainjhs-fourthMap',
    view: 'mainjhs-fourth',
    connectsToFloor: 'mainjhs-fifthMap',
    connectsToView: 'mainjhs-fifth'
  },
  {
    id: 'backstairs-4-pair',
    name: 'Back Stairs L4 (from mainjhs-fourth)',
    type: 'stairs',
    x: 627,
    y: 70,
    floor: 'mainjhs-fifthMap',
    view: 'mainjhs-fifth',
    connectsToFloor: 'mainjhs-fourthMap',
    connectsToView: 'mainjhs-fourth',
    floorDirection: 'both'
  },
  {
    id: 'stairs-5',
    name: 'Fifth Stair',
    type: 'stairs',
    x: 597,
    y: 697,
    floor: 'mainjhs-fourthMap',
    view: 'mainjhs-fourth',
    connectsToFloor: 'mainjhs-fifthMap',
    connectsToView: 'mainjhs-fifth'
  },
  {
    id: 'stairs-5-pair',
    name: 'Fifth Stair (from mainjhs-fourth)',
    type: 'stairs',
    x: 797,
    y: 676,
    floor: 'mainjhs-fifthMap',
    view: 'mainjhs-fifth',
    connectsToFloor: 'mainjhs-fourthMap',
    connectsToView: 'mainjhs-fourth',
    floorDirection: 'both'
  },
  {
    id: 'node-129',
    name: 'node-129',
    type: 'waypoint',
    x: 795,
    y: 592,
    floor: 'mainjhs-fifthMap',
    view: 'mainjhs-fifth',
    connectsToFloor: 'mainjhs-fifthMap',
    connectsToView: 'mainjhs-fifth'
  },
  {
    id: 'node-130',
    name: 'node-130',
    type: 'waypoint',
    x: 551,
    y: 590,
    floor: 'mainjhs-fifthMap',
    view: 'mainjhs-fifth',
    connectsToFloor: 'mainjhs-fifthMap',
    connectsToView: 'mainjhs-fifth'
  },
  {
    id: 'node-131',
    name: 'node-131',
    type: 'waypoint',
    x: 551,
    y: 644,
    floor: 'mainjhs-fifthMap',
    view: 'mainjhs-fifth',
    connectsToFloor: 'mainjhs-fifthMap',
    connectsToView: 'mainjhs-fifth'
  },
  {
    id: 'node-132',
    name: 'node-132',
    type: 'waypoint',
    x: 549,
    y: 284,
    floor: 'mainjhs-fifthMap',
    view: 'mainjhs-fifth',
    connectsToFloor: 'mainjhs-fifthMap',
    connectsToView: 'mainjhs-fifth'
  },
  {
    id: '501',
    name: 'Room 501',
    type: 'classroom',
    x: 861,
    y: 592,
    floor: 'mainjhs-fifthMap',
    view: 'mainjhs-fifth'
  },
  {
    id: '502',
    name: 'Room 502',
    type: 'classroom',
    x: 489,
    y: 643,
    floor: 'mainjhs-fifthMap',
    view: 'mainjhs-fifth'
  },
  {
    id: '503',
    name: 'Room 503',
    type: 'classroom',
    x: 481,
    y: 285,
    floor: 'mainjhs-fifthMap',
    view: 'mainjhs-fifth'
  },
  {
    id: '504',
    name: 'Room 504',
    type: 'classroom',
    x: 484,
    y: 54,
    floor: 'mainjhs-fifthMap',
    view: 'mainjhs-fifth'
  },
  {
    id: 'jhs-faculty',
    name: 'Faculty (JHS)',
    type: 'classroom',
    x: 821,
    y: 209,
    floor: 'mainjhs-fifthMap',
    view: 'mainjhs-fifth'
  },
  {
    id: 'fifthrest',
    name: 'Restroom Fourth Floor',
    type: 'restroom',
    x: 826,
    y: 113,
    floor: 'mainjhs-fifthMap',
    view: 'mainjhs-fifth'
  },
  {
    id: 'node-133',
    name: 'node-133',
    type: 'waypoint',
    x: 547,
    y: 209,
    floor: 'mainjhs-fifthMap',
    view: 'mainjhs-fifth'
  },
  {
    id: 'node-134',
    name: 'node-134',
    type: 'waypoint',
    x: 546,
    y: 112,
    floor: 'mainjhs-fifthMap',
    view: 'mainjhs-fifth'
  },
  {
    id: 'node-135',
    name: 'node-135',
    type: 'waypoint',
    x: 545,
    y: 71,
    floor: 'mainjhs-fifthMap',
    view: 'mainjhs-fifth'
  },
  {
    id: 'node-136',
    name: 'node-136',
    type: 'waypoint',
    x: 545,
    y: 54,
    floor: 'mainjhs-fifthMap',
    view: 'mainjhs-fifth'
  },
  {
    id: 'tle-room',
    name: 'TLE Room',
    type: 'classroom',
    x: 609,
    y: 496,
    floor: 'mainjhs-fifthMap',
    view: 'mainjhs-fifth'
  },
  {
    id: 'node-137',
    name: 'node-137',
    type: 'waypoint',
    x: 551,
    y: 394,
    floor: 'mainjhs-fifthMap',
    view: 'mainjhs-fifth'
  },
  {
    id: 'node-138',
    name: 'node-138',
    type: 'waypoint',
    x: 609,
    y: 394,
    floor: 'mainjhs-fifthMap',
    view: 'mainjhs-fifth'
  }
];

// === CONNECTIONS ===
const connections = [
  ['node-2', 'node-1'],
  ['node-2', 'registrar'],
  ['accounting', 'node-10'],
  ['node-4', 'node-7'],
  ['node-10', 'node-11'],
  ['g1', 'node-11'],
  ['node-11', 'node-4'],
  ['node-7', 'node-8'],
  ['node-8', 'rest'],
  ['node-4', 'node-5'],
  ['node-5', 'node-6'],
  ['node-5', 'g2'],
  ['node-6', 'uniform'],
  ['node-5', 'node-9'],
  ['backstairs-1', 'backstairs-1-pair'],
  ['node-9', 'backstairs-1'],
  ['node-12', 'node-14'],
  ['node-15', 'node-16'],
  ['node-14', 'node-15'],
  ['node-14', 'library'],
  ['node-16', 'b1'],
  ['node-15', 'hele'],
  ['node-16', 'node-17'],
  ['node-17', 'b2'],
  ['node-17', 'node-18'],
  ['node-18', 'node-19'],
  ['node-19', 'jhscanteen'],
  ['node-19', 'node-20'],
  ['node-20', 'groundrest'],
  ['node-18', 'node-21'],
  ['node-21', 'b3'],
  ['node-21', 'node-22'],
  ['node-22', 'clinic'],
  ['node-22', 'b4'],
  ['node-21', 'node-23'],
  ['node-23', 'backstairs-1-pair'],
  ['node-6', 'g4'],
  ['node-7', 'g3'],
  ['node-72', 'node-72-pair'],
  ['backstairs-1', 'node-72'],
  ['node-85', 'node-85-pair'],
  ['node-100', 'node-90'],
  ['node-90', '202'],
  ['node-90', 'node-91'],
  ['node-91', 'node-92'],
  ['203', 'node-92'],
  ['node-92', 'node-93'],
  ['node-93', 'node-94'],
  ['node-94', 'node-95'],
  ['node-93', '204'],
  ['node-95', 'comlab'],
  ['node-95', 'node-96'],
  ['node-96', 'secondrest'],
  ['node-97', '205'],
  ['node-97', 'node-98'],
  ['node-98', 'guidance-office'],
  ['node-94', 'node-97'],
  ['jhslab', 'node-98'],
  ['node-97', 'node-99'],
  ['backstairs-1', 'node-101'],
  ['node-102', 'node-85'],
  ['node-101', 'node-102'],
  ['node-103', 'node-103-pair'],
  ['node-12', 'node-103'],
  ['node-105', 'node-2'],
  ['node-105', 'node-10'],
  ['node-105', 'node-104'],
  ['node-104', 'office1'],
  ['node-104', 'node-103-pair'],
  ['node-106', 'node-106-pair'],
  ['node-1', 'node-106'],
  ['node-107', '201'],
  ['node-107', 'node-91'],
  ['node-107', 'node-106-pair'],
  ['node-110', 'node-109'],
  ['302', 'node-110'],
  ['node-111', 'node-112'],
  ['node-111', 'node-110'],
  ['303', 'node-112'],
  ['node-111', 'node-113'],
  ['node-113', '301'],
  ['node-114', 'node-112'],
  ['node-114', '304'],
  ['node-114', 'node-115'],
  ['node-115', 'node-116'],
  ['node-116', '306'],
  ['node-116', 'node-117'],
  ['node-117', 'thirdrest'],
  ['node-115', 'node-118'],
  ['node-118', 'node-119'],
  ['node-118', '305'],
  ['node-119', 'principal-office'],
  ['principal-office', 'node-119'],
  ['307', 'node-119'],
  ['node-120', 'node-118'],
  ['stairs-3', 'stairs-3-pair'],
  ['stairs-3-pair', 'node-113'],
  ['node-100', 'stairs-3'],
  ['node-121', 'node-122'],
  ['backstairs-2', 'backstairs-2-pair'],
  ['backstairs-2-pair', 'node-121'],
  ['node-120', 'node-121'],
  ['node-99', 'node-127'],
  ['node-127', 'node-85-pair'],
  ['node-126', 'node-127'],
  ['node-126', 'backstairs-2'],
  ['node-109', 'stairs-4'],
  ['node-2-mainjhsfourth', 'node-1-mainjhsfourth'],
  ['node-2-mainjhsfourth', '402'],
  ['403', 'node-10-mainjhsfourth'],
  ['node-4-mainjhsfourth', 'node-7-mainjhsfourth'],
  ['node-10-mainjhsfourth', 'node-11-mainjhsfourth'],
  ['404', 'node-11-mainjhsfourth'],
  ['node-11-mainjhsfourth', 'node-4-mainjhsfourth'],
  ['node-7-mainjhsfourth', 'node-8-mainjhsfourth'],
  ['node-4-mainjhsfourth', 'node-5-mainjhsfourth'],
  ['node-5-mainjhsfourth', 'node-6-mainjhsfourth'],
  ['node-5-mainjhsfourth', '405'],
  ['node-6-mainjhsfourth', 'faculty-4'],
  ['node-5-mainjhsfourth', 'node-9-mainjhsfourth'],
  ['node-6-mainjhsfourth', '407'],
  ['node-7-mainjhsfourth', '406'],
  ['node-101-mainjhsfourth', 'node-102-mainjhsfourth'],
  ['node-105-mainjhsfourth', 'node-2-mainjhsfourth'],
  ['node-105-mainjhsfourth', 'node-10-mainjhsfourth'],
  ['node-105-mainjhsfourth', 'node-104-mainjhsfourth'],
  ['node-104-mainjhsfourth', '401'],
  ['fourthrest', 'node-8-mainjhsfourth'],
  ['backstairs-3', 'backstairs-3-pair'],
  ['backstairs-3-pair', 'node-101-mainjhsfourth'],
  ['node-101-mainjhsfourth', 'node-9-mainjhsfourth'],
  ['node-122', 'backstairs-3'],
  ['backstairs-4', 'backstairs-4-pair'],
  ['node-102-mainjhsfourth', 'backstairs-4'],
  ['stairs-5', 'stairs-5-pair'],
  ['node-131', 'node-130'],
  ['502', 'node-131'],
  ['node-129', 'stairs-5-pair'],
  ['node-129', '501'],
  ['node-129', 'node-130'],
  ['504', 'node-136'],
  ['node-135', 'node-136'],
  ['node-135', 'backstairs-4-pair'],
  ['node-134', 'node-135'],
  ['node-133', 'node-134'],
  ['node-132', 'node-133'],
  ['node-133', 'jhs-faculty'],
  ['node-134', 'fifthrest'],
  ['node-132', '503'],
  ['tle-room', 'node-138'],
  ['node-137', 'node-138'],
  ['node-137', 'node-132'],
  ['node-137', 'node-130']
];
/*************************************************
 * GLOBAL STATE
 *************************************************/
let selectedStart = '';
let selectedDestination = '';
let currentView = 'overall';
let currentFloor = '';
let currentPath = [];

let zoomLevel = 1;
let isDragging = false;
let dragStartX = 0;
let dragStartY = 0;
let translateX = 0;
let translateY = 0;

// last known pointer/touch (client coords). Used so zoom buttons can zoom at cursor/tap when available.
let lastHoverClientX = null;
let lastHoverClientY = null;

// Pointer / inertia and rendering helpers
let isPointerDown = false;
let pointerId = null;
let lastPositions = []; // recent {x,y,t} samples for velocity
let velocityX = 0;
let velocityY = 0;
let inertiaRaf = null;
let rafScheduled = false;
let pathAnimCounter = 0; // unique id for animated paths
// Navigation helpers for multi-floor directions
let currentRouteFloors = [];
let currentRouteFloorIndex = 0;

// Build graph for pathfinding
const graph = {};
locations.forEach(loc => graph[loc.id] = []);
connections.forEach(([a, b]) => {
    if (graph[a] && graph[b]) {
        graph[a].push(b);
        graph[b].push(a);
    }
});

/*************************************************
 * PATHFINDING ALGORITHM (BFS)
 *************************************************/
function findPath(startId, endId) {
    if (startId === endId) return [startId];
    
    const queue = [[startId]];
    const visited = new Set([startId]);
    
    while (queue.length > 0) {
        const path = queue.shift();
        const node = path[path.length - 1];
        
        if (node === endId) return path;
        
        const neighbors = graph[node] || [];
        for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push([...path, neighbor]);
            }
        }
    }
    
    return null;
}

/*************************************************
 * PATH VISUALIZATION
 *************************************************/
function drawPathOnMap(path) {
    clearPathFromMaps();
    
    if (!path || path.length < 2) return;
    
    // Group path segments by floor
    const segmentsByFloor = {};
    
    for (let i = 0; i < path.length - 1; i++) {
        const fromLoc = locations.find(l => l.id === path[i]);
        const toLoc = locations.find(l => l.id === path[i + 1]);
        
        if (!fromLoc || !toLoc) continue;
        
        // Same floor - collect segments
        if (fromLoc.floor === toLoc.floor) {
            if (!segmentsByFloor[fromLoc.floor]) {
                segmentsByFloor[fromLoc.floor] = [];
            }
            segmentsByFloor[fromLoc.floor].push([fromLoc, toLoc]);
        } else {
            // Different floors (stairs connection) - mark with transition indicator
            drawFloorTransitionMarker(fromLoc, fromLoc.floor, toLoc);
            drawFloorTransitionMarker(toLoc, toLoc.floor, fromLoc);
        }
    }
    
    // Draw smooth continuous path for each floor
    Object.keys(segmentsByFloor).forEach(floorId => {
        drawSmoothPath(segmentsByFloor[floorId], floorId);
    });
    
    // Draw start and end markers only
    const startLoc = locations.find(l => l.id === path[0]);
    const endLoc = locations.find(l => l.id === path[path.length - 1]);
    if (startLoc) drawPathMarker(startLoc, startLoc.floor, true, false);
    if (endLoc) drawPathMarker(endLoc, endLoc.floor, false, true);
}

/**
 * Draws a simple continuous path through multiple segments on the same floor
 * Creates a single SVG path with mall-style appearance (clean, no unnecessary curves)
 */
function drawSmoothPath(segments, floorId) {
    const floorMap = document.getElementById(floorId);
    if (!floorMap || segments.length === 0) return;

    let pathLayer = floorMap.querySelector('.path-layer');
    if (!pathLayer) {
        pathLayer = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        pathLayer.classList.add('path-layer');
        floorMap.appendChild(pathLayer);
    }

    // Collect all waypoints in order
    const points = [segments[0][0]]; // Start with first point
    segments.forEach(seg => {
        points.push(seg[1]); // Add end point of each segment
    });

    // Create SVG path string with straight lines
    let pathData = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
        pathData += ` L ${points[i].x} ${points[i].y}`;
    }

    // Draw the main path
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const pathId = `animated-path-${++pathAnimCounter}`;
    path.setAttribute('id', pathId);
    path.setAttribute('d', pathData);
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke', '#0066CC'); // Mall-style blue
    path.setAttribute('stroke-width', '5');
    path.setAttribute('stroke-linecap', 'round');
    path.setAttribute('stroke-linejoin', 'round');

    // make a moving dashed look and animate dash offset
    const length = Math.max(1, Math.round(path.getTotalLength ? path.getTotalLength() : 1000));
    path.setAttribute('stroke-dasharray', '14 10');
    path.style.strokeDashoffset = '0';
    const animDuration = Math.max(3, Math.round(length / 180));
    path.style.animation = `dash ${animDuration}s linear infinite`;

    pathLayer.appendChild(path);

    // Small moving dot that traverses the path to show "movement"
    try {
        const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        dot.setAttribute('r', '6');
        dot.setAttribute('fill', '#00aaff');
        dot.setAttribute('class', 'moving-dot');

        const animateMotion = document.createElementNS('http://www.w3.org/2000/svg', 'animateMotion');
        animateMotion.setAttribute('dur', `${animDuration}s`);
        animateMotion.setAttribute('repeatCount', 'indefinite');
        animateMotion.setAttribute('rotate', 'auto');

        const mpath = document.createElementNS('http://www.w3.org/2000/svg', 'mpath');
        // use xlink:href attribute (legacy and supported in browsers for SVG animateMotion)
        mpath.setAttributeNS('http://www.w3.org/1999/xlink', 'href', `#${pathId}`);
        animateMotion.appendChild(mpath);
        dot.appendChild(animateMotion);
        pathLayer.appendChild(dot);
    } catch (err) {
        // Fallback: keep the static arrow marker
        console.warn('animateMotion unsupported in this browser, skipping moving dot', err);
    }

    // Add single direction arrow near the end (static)
    addArrowMarker(points, pathLayer);
}

/**
 * Adds a single arrow at the end of the path showing direction
 */
function addArrowMarker(points, pathLayer) {
    if (points.length < 2) return;
    
    // Use the last segment to determine direction
    const lastIdx = points.length - 1;
    const beforeLast = points[lastIdx - 1];
    const last = points[lastIdx];
    
    // Calculate direction angle from second-to-last point to last point
    const dx = last.x - beforeLast.x;
    const dy = last.y - beforeLast.y;
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);
    
    // Position arrow at the destination (last point)
    const arrowGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    arrowGroup.setAttribute('transform', `translate(${last.x}, ${last.y}) rotate(${angle})`);
    
    // Arrow shape pointing right (will be rotated)
    const arrow = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    arrow.setAttribute('d', 'M 0,0 L -10,-5 L -5,0 L -10,5 Z');
    arrow.setAttribute('fill', '#0066CC');
    arrowGroup.appendChild(arrow);
    
    pathLayer.appendChild(arrowGroup);
}

function drawPathSegment(fromLoc, toLoc, floorId, color, width) {
    const floorMap = document.getElementById(floorId);
    if (!floorMap) return;
    
    let pathLayer = floorMap.querySelector('.path-layer');
    if (!pathLayer) {
        pathLayer = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        pathLayer.classList.add('path-layer');
        floorMap.appendChild(pathLayer);
    }
    
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', fromLoc.x);
    line.setAttribute('y1', fromLoc.y);
    line.setAttribute('x2', toLoc.x);
    line.setAttribute('y2', toLoc.y);
    line.setAttribute('stroke', color);
    line.setAttribute('stroke-width', width);
    line.setAttribute('stroke-linecap', 'round');
    line.setAttribute('opacity', '0.8');
    pathLayer.appendChild(line);
}

function drawFloorTransitionMarker(loc, floorId, pairedLoc) {
    const floorMap = document.getElementById(floorId);
    if (!floorMap) return;
    
    const container = floorMap.querySelector('.svg-root') || floorMap;
    // Ensure there's a dedicated path layer for routes and a topmost marker-layer for interactive markers
    let pathLayer = container.querySelector('.path-layer');
    if (!pathLayer) {
        pathLayer = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        pathLayer.classList.add('path-layer');
        container.appendChild(pathLayer);
    }

    // Marker layer should be appended after path layer so markers are on top and receive pointer events
    let markerLayer = container.querySelector('.marker-layer');
    if (!markerLayer) {
        markerLayer = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        markerLayer.classList.add('marker-layer');
        container.appendChild(markerLayer);
    }
    
    // Create clickable group for floor transition
    const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    group.classList.add('transition-marker');
    group.style.cursor = 'pointer';
    group.setAttribute('pointer-events', 'auto');
    group.setAttribute('data-paired-id', pairedLoc ? pairedLoc.id : 'none');
    
    // Pulsing circle for floor transition
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', loc.x);
    circle.setAttribute('cy', loc.y);
    circle.setAttribute('r', '15');
    circle.setAttribute('fill', '#f59e0b');
    circle.setAttribute('stroke', 'white');
    circle.setAttribute('stroke-width', '3');
    circle.setAttribute('opacity', '0.95');
    circle.setAttribute('pointer-events', 'auto');
    
    // Add animation
    const animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
    animate.setAttribute('attributeName', 'r');
    animate.setAttribute('values', '15;20;15');
    animate.setAttribute('dur', '1.5s');
    animate.setAttribute('repeatCount', 'indefinite');
    circle.appendChild(animate);
    
    group.appendChild(circle);
    
    // Add floor change icon
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', loc.x);
    text.setAttribute('y', loc.y + 5);
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('font-size', '16');
    text.setAttribute('font-weight', 'bold');
    text.setAttribute('fill', 'white');
    text.setAttribute('pointer-events', 'none');
    text.textContent = '↕';
    group.appendChild(text);
    
    // Prevent parent pointer handling and record a candidate tap for small-move detection
    group.addEventListener('pointerdown', (e) => {
        e.stopPropagation();
        e.preventDefault();
        try { group.setPointerCapture && group.setPointerCapture(e.pointerId); } catch (err) {}
        group.__down = { x: e.clientX, y: e.clientY, t: performance.now() };
    });

    // Click handler - navigate to paired location
    group.addEventListener('click', (e) => {
        e.stopPropagation();
        // If pointerup already handled this tap, skip duplicate click handling
        if (group.__handled) { group.__handled = false; return; }
        console.log('Clicked transition marker - pairedId:', pairedLoc ? pairedLoc.id : 'none');
        if (pairedLoc) {
            console.log('Switching to floor (via transition marker):', pairedLoc.floor);
            // Stop any inertia so we don't get unexpected motion
            if (inertiaRaf) { cancelAnimationFrame(inertiaRaf); inertiaRaf = null; velocityX = velocityY = 0; }

            // Switch floor but preserve the current transform so view remains stable
            currentFloor = pairedLoc.floor;
            switchFloor(pairedLoc.floor, { preserveTransform: true });

            // Small debounce to ensure DOM updates have taken effect; do NOT change zoom/translate to avoid jumps
            setTimeout(() => {
                try {
                    // Keep current zoom/translate as-is and only mark the destination so UI highlights it
                    selectedDestination = pairedLoc.id;
                    updateMapHighlights();
                    scheduleUpdate();
                    document.getElementById('zoomLevel').textContent = `${Math.round(zoomLevel * 100)}%`;
                    console.log('Preserved view and marked destination', selectedDestination, 'zoom', zoomLevel);
                } catch (err) { console.warn('Post-switch update failed', err); }
            }, 80);

            // Show destination info
            const info = document.querySelector('.info-panel');
            if (info) {
                info.innerHTML = `<strong>${pairedLoc.name}</strong><br>Floor: ${pairedLoc.floor.replace(/Map$/, '').toUpperCase()}`;
            }
        }
    });

    // Also handle pointerup directly to ensure taps on touch/pointer devices fire reliably
    group.addEventListener('pointerup', (e) => {
        e.stopPropagation();
        e.preventDefault();
        console.log('Pointerup on transition marker - pairedId:', pairedLoc ? pairedLoc.id : 'none');

        // If the pointerdown/ pointerup are within a small distance, treat as a tap
        const down = group.__down;
        let treatedAsTap = false;
        if (down) {
            const dx = e.clientX - down.x;
            const dy = e.clientY - down.y;
            const dist = Math.hypot(dx, dy);
            if (dist < 12) treatedAsTap = true;
        }

        if (pairedLoc && treatedAsTap) {
            // Stop any inertia so we don't get unexpected motion
            if (inertiaRaf) { cancelAnimationFrame(inertiaRaf); inertiaRaf = null; velocityX = velocityY = 0; }

            // Switch floor but preserve the current transform so view remains stable
            currentFloor = pairedLoc.floor;
            switchFloor(pairedLoc.floor, { preserveTransform: true });

            // Mark handled to prevent duplicate click handling
            group.__handled = true;

            setTimeout(() => {
                try {
                    // Only mark destination and reapply highlights; do NOT change zoom/translate
                    selectedDestination = pairedLoc.id;
                    updateMapHighlights();
                    scheduleUpdate();
                    document.getElementById('zoomLevel').textContent = `${Math.round(zoomLevel * 100)}%`;
                    console.log('Preserved view and marked destination', selectedDestination, 'zoom', zoomLevel);
                } catch (err) { console.warn('Post-switch update failed', err); }
            }, 60);

            const info = document.querySelector('.info-panel');
            if (info) {
                info.innerHTML = `<strong>${pairedLoc.name}</strong><br>Floor: ${pairedLoc.floor.replace(/Map$/, '').toUpperCase()}`;
            }
        }
        group.__down = null;
    });
    
    // Hover effect - adjust radius to avoid filters causing rasterization
    group.addEventListener('mouseenter', () => {
        circle.setAttribute('r', '17');
    });
    group.addEventListener('mouseleave', () => {
        circle.setAttribute('r', '15');
    });
    
    // Append to the marker layer (topmost) so the marker is clickable and not occluded by other drawn elements
    markerLayer.appendChild(group);
}

function drawPathMarker(loc, floorId, isStart, isEnd) {
    const floorMap = document.getElementById(floorId);
    if (!floorMap) return;
    
    let pathLayer = floorMap.querySelector('.path-layer');
    if (!pathLayer) {
        pathLayer = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        pathLayer.classList.add('path-layer');
        floorMap.appendChild(pathLayer);
    }
    
    // Only draw start and end markers (no intermediate waypoints)
    if (!isStart && !isEnd) return;
    
    // Start: green circle, End: red circle
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', loc.x);
    circle.setAttribute('cy', loc.y);
    circle.setAttribute('r', '8');
    circle.setAttribute('fill', isStart ? '#22c55e' : '#ef4444');
    circle.setAttribute('stroke', 'white');
    circle.setAttribute('stroke-width', '2');
    
    pathLayer.appendChild(circle);
}

function clearPathFromMaps() {
    // Remove path drawings
    document.querySelectorAll('.path-layer').forEach(layer => layer.remove());

    // Also remove floor transition markers so they don't persist after a route or when clearing
    document.querySelectorAll('.transition-marker').forEach(m => m.remove());

    // Clear selected destination flag if the marker referenced it
    // (This prevents a stale 'destination' selection from persisting until refresh)
    const destInput = document.getElementById('destination');
    const destId = destInput ? destInput.dataset.id : '';
    if (selectedDestination && (!destId || selectedDestination === destId)) {
        // If the destination input doesn't match, keep selectedDestination; otherwise clear it
        selectedDestination = '';
    }

    updateMapHighlights();
}

/*************************************************
 * GENERATE DIRECTIONS
 *************************************************/
function generateDirections(path) {
    if (!path || path.length < 2) return [];
    
    const directions = [];
    const pathLocs = path.map(id => locations.find(l => l.id === id)).filter(Boolean);
    
    for (let i = 0; i < pathLocs.length; i++) {
        const current = pathLocs[i];
        
        if (i === 0) {
            directions.push(`Start at ${current.name}`);
        } else if (i === pathLocs.length - 1) {
            directions.push(`Arrive at ${current.name}`);
        } else {
            if (current.type === 'stairs') {
                const prev = pathLocs[i - 1];
                const next = pathLocs[i + 1];
                if (prev.floor !== next.floor) {
                    directions.push(`Take ${current.name} to change floors`);
                }
            } else if (!current.hidden) {
                directions.push(`Pass by ${current.name}`);
            }
        }
    }
    
    return directions;
}

/*************************************************
 * FLOOR MAPPING
 *************************************************/
const floorMap = {
    'mainjhs': [
        { id: 'groundjhsMap', name: 'Ground Level' },
        { id: 'mainjhsMap', name: 'Main Floor' },
        { id: 'mainjhs-secondMap', name: 'Second Floor' },
        { id: 'mainjhs-thirdMap', name: 'Third Floor' },
        { id: 'mainjhs-fourthMap', name: 'Fourth Floor' },
        { id: 'mainjhs-fifthMap', name: 'Fifth Floor' },
    ],
    'mainjhs-second': [
        { id: 'groundjhsMap', name: 'Ground Level' },
        { id: 'mainjhsMap', name: 'Main Floor' },
        { id: 'mainjhs-secondMap', name: 'Second Floor' },
        { id: 'mainjhs-thirdMap', name: 'Third Floor' },
        { id: 'mainjhs-fourthMap', name: 'Fourth Floor' },
        { id: 'mainjhs-fifthMap', name: 'Fifth Floor' },
    ],
    'mainjhs-third': [
        { id: 'groundjhsMap', name: 'Ground Level' },
        { id: 'mainjhsMap', name: 'Main Floor' },
        { id: 'mainjhs-secondMap', name: 'Second Floor' },
        { id: 'mainjhs-thirdMap', name: 'Third Floor' },
        { id: 'mainjhs-fourthMap', name: 'Fourth Floor' },
        { id: 'mainjhs-fifthMap', name: 'Fifth Floor' },
    ],
    'mainjhs-fourth': [
        { id: 'groundjhsMap', name: 'Ground Level' },
        { id: 'mainjhsMap', name: 'Main Floor' },
        { id: 'mainjhs-secondMap', name: 'Second Floor' },
        { id: 'mainjhs-thirdMap', name: 'Third Floor' },
        { id: 'mainjhs-fourthMap', name: 'Fourth Floor' },
        { id: 'mainjhs-fifthMap', name: 'Fifth Floor' },
    ],
    'mainjhs-fifth': [
        { id: 'groundjhsMap', name: 'Ground Level' },
        { id: 'mainjhsMap', name: 'Main Floor' },
        { id: 'mainjhs-secondMap', name: 'Second Floor' },
        { id: 'mainjhs-thirdMap', name: 'Third Floor' },
        { id: 'mainjhs-fourthMap', name: 'Fourth Floor' },
        { id: 'mainjhs-fifthMap', name: 'Fifth Floor' },
    ],
    'groundjhs': [
        { id: 'groundjhsMap', name: 'Ground Level' }
    ],
    'shs-bldg': [
        { id: 'shs-bldgMap', name: 'Senior Highschool Building' }
    ],
    'overall': [
        { id: 'overallMap', name: 'Overall Campus' }
    ]
};

/*************************************************
 * INITIALIZATION
 *************************************************/
function init() {
    populateDropdowns();
    attachUIEvents();
    setupMapInteractions();
    initMobilePicker();
    initDirectionsFloorNav();
}

/* Mobile map picker: allows mobile users to choose which map view to open first and provides an in-map 'Get Directions' button */
function initMobilePicker() {
    const bar = document.getElementById('mobileMapBar');
    initFloorNav();
    const picker = document.getElementById('mobileMapPicker');
    const optionsContainer = document.getElementById('mobileMapOptions');
    const mobileSelectBtn = document.getElementById('mobileMapSelect');
    const mobileGetBtn = document.getElementById('mobileGetDirectionsBtn');
    const closeBtn = document.getElementById('mobilePickerClose');

    if (!bar || !picker || !optionsContainer || !mobileSelectBtn || !mobileGetBtn || !closeBtn) return;

    // Populate options from existing view buttons
    const views = Array.from(document.querySelectorAll('.view-btn'))
        .map(btn => ({ id: btn.dataset.view, name: btn.textContent.trim() }));

    views.forEach(view => {
        const btn = document.createElement('button');
        btn.textContent = view.name;
        btn.className = 'mobile-map-option';
        btn.addEventListener('click', () => {
            switchView(view.id);
            updateMobileMapLabel(view.id);
            picker.classList.add('hidden');
            localStorage.setItem('preferredMapView', view.id);
        });
        optionsContainer.appendChild(btn);
    });

    // Show/hide logic
    mobileSelectBtn.addEventListener('click', () => {
        picker.classList.remove('hidden');
    });
    closeBtn.addEventListener('click', () => picker.classList.add('hidden'));

    // Desktop: provide a visible trigger for choosing map (useful for testing and desktop UX)
    const desktopSelectBtn = document.getElementById('desktopMapSelect');
    if (desktopSelectBtn) desktopSelectBtn.addEventListener('click', () => picker.classList.remove('hidden'));

    // Close picker with Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') picker.classList.add('hidden');
    });

    // Close when clicking on backdrop
    picker.addEventListener('click', (e) => {
        if (e.target === picker) picker.classList.add('hidden');
    });

    // In-map get directions button
    mobileGetBtn.addEventListener('click', () => {
        // trigger the same handler as the main UI
        document.getElementById('getDirections').click();
    });

    const mobileClear = document.getElementById('mobileClearRouteBtn');
    if (mobileClear) mobileClear.addEventListener('click', () => { clearPathFromMaps(); hideDirectionsFloorNav(); document.getElementById('infoPanel').classList.add('hidden'); });

    // Show mobile UI only for touch-capable small devices
    const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints && navigator.maxTouchPoints > 0) || /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const isHoverable = window.matchMedia && window.matchMedia('(hover: hover)').matches;
    const isCoarsePointer = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
    const isMobileUA = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    function shouldShowMobileBar() {
        // Only show the mobile bar on narrow screens and devices that are clearly mobile (coarse pointer or mobile UA) or lack hover
        return window.innerWidth <= 768 && isTouch && (isCoarsePointer || isMobileUA || !isHoverable);
    }

    function updateMobileBarLayout() {
        const barEl = document.getElementById('mobileMapBar');
        if (!barEl) return;

        if (!shouldShowMobileBar()) {
            barEl.classList.add('hidden');
            barEl.classList.remove('vertical', 'compact');
            barEl.setAttribute('aria-hidden', 'true');
            picker.classList.add('hidden');
            return;
        }

        // show bar
        barEl.classList.remove('hidden');
        barEl.setAttribute('aria-hidden', 'false');
        // vertical layout for narrow widths
        if (window.innerWidth < 420) {
            barEl.classList.add('vertical');
            barEl.classList.remove('compact');
        } else {
            barEl.classList.remove('vertical');
            // compact (floating) for very small devices
            if (window.innerWidth < 360) {
                barEl.classList.add('compact');
            } else {
                barEl.classList.remove('compact');
            }
        }
    }

    // wire layout updates
    updateMobileBarLayout();
    window.addEventListener('resize', updateMobileBarLayout);
    window.addEventListener('orientationchange', updateMobileBarLayout);
    // keep it hidden if the user scrolls on desktop
    window.addEventListener('scroll', () => {
        const barEl = document.getElementById('mobileMapBar');
        if (!barEl) return;
        if (!shouldShowMobileBar()) {
            barEl.classList.add('hidden');
            barEl.setAttribute('aria-hidden', 'true');
            picker.classList.add('hidden');
        }
    }, { passive: true });

    // hide mobile bar when inputs are focused to avoid covering the keyboard
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(inp => {
        inp.addEventListener('focus', () => {
            const barEl = document.getElementById('mobileMapBar');
            if (barEl) barEl.classList.add('hidden');
        });
        inp.addEventListener('blur', () => {
            const barEl = document.getElementById('mobileMapBar');
            if (barEl && shouldShowMobileBar()) barEl.classList.remove('hidden');
        });
    });

    if (shouldShowMobileBar()) {
        const saved = localStorage.getItem('preferredMapView');
        if (saved) {
            switchView(saved);
            updateMobileMapLabel(saved);
        } else {
            // show picker on first use
            picker.classList.remove('hidden');
        }
    } else {
        // Ensure desktop / non-touch devices always keep mobile UI hidden
        bar.classList.add('hidden');
        picker.classList.add('hidden');
    }
}

function updateMobileMapLabel(viewId) {
    const mobileSelectBtn = document.getElementById('mobileMapSelect');
    if (!mobileSelectBtn) return;
    const viewBtn = document.querySelector(`.view-btn[data-view="${viewId}"]`);
    if (viewBtn) {
        mobileSelectBtn.textContent = viewBtn.textContent.trim();
    } else {
        mobileSelectBtn.textContent = 'Map';
    }
}

function populateDropdowns() {
    const startSelect = document.getElementById('startLocation');
    const destSelect = document.getElementById('destination');
    
    // Only show non-hidden locations, exclude waypoints, stairs, and backstairs
    const visibleLocations = locations.filter(loc => !loc.hidden && loc.type !== 'waypoint' && loc.type !== 'stairs' && !loc.id.includes('backstairs'));
    
    // Store all visible locations for search functionality
    window.allVisibleLocations = visibleLocations;
    
    visibleLocations.forEach(location => {
        startSelect.appendChild(createOption(location));
        destSelect.appendChild(createOption(location));
    });
}

function createOption(location) {
    const option = document.createElement('option');
    option.value = location.id;
    option.textContent = location.name;
    return option;
}

/*************************************************
 * SEARCHABLE DROPDOWN FUNCTIONALITY
 *************************************************/
function setupSearchableDropdowns() {
    const startInput = document.getElementById('startLocation');
    const startList = document.getElementById('startLocationList');
    const destInput = document.getElementById('destination');
    const destList = document.getElementById('destinationList');

    if (!startInput || !destInput || !startList || !destList) return;

    // Initialize both dropdowns
    populateDropdownList(startInput, startList);
    populateDropdownList(destInput, destList);

    // Handle start location input
    startInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        filterDropdownList(startList, searchTerm);
        if (startList.children.length > 0) {
            startList.classList.remove('hidden');
        }
    });

    startInput.addEventListener('focus', () => {
        startList.classList.remove('hidden');
    });

    // Handle destination input
    destInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        filterDropdownList(destList, searchTerm);
        if (destList.children.length > 0) {
            destList.classList.remove('hidden');
        }
    });

    destInput.addEventListener('focus', () => {
        destList.classList.remove('hidden');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.searchable-dropdown')) {
            startList.classList.add('hidden');
            destList.classList.add('hidden');
        }
    });
}

function populateDropdownList(inputElement, listElement) {
    listElement.innerHTML = '';
    
    window.allVisibleLocations.forEach(location => {
        const li = document.createElement('li');
        li.textContent = location.name;
        li.dataset.id = location.id;
        li.addEventListener('click', () => {
            inputElement.value = location.name;
            inputElement.dataset.id = location.id;
            listElement.classList.add('hidden');
            updateMapHighlights();
        });
        listElement.appendChild(li);
    });
}

function filterDropdownList(listElement, searchTerm) {
    const items = listElement.querySelectorAll('li');
    
    if (searchTerm === '') {
        items.forEach(item => item.style.display = 'block');
        return;
    }

    let visibleCount = 0;
    items.forEach(item => {
        if (item.textContent.toLowerCase().includes(searchTerm)) {
            item.style.display = 'block';
            visibleCount++;
        } else {
            item.style.display = 'none';
        }
    });

    // Hide dropdown if no items match
    if (visibleCount === 0) {
        listElement.classList.add('hidden');
    }
}

function getSelectedLocationId(fieldName) {
    const input = document.getElementById(fieldName);
    return input.dataset.id || '';
}

/*************************************************
 * EVENT LISTENERS
 *************************************************/
function attachUIEvents() {
    // Note: searchable dropdown change handlers are now in setupSearchableDropdowns
    
    document.getElementById('getDirections').addEventListener('click', handleGetDirections);
    const clearBtn = document.getElementById('clearRoute');
    if (clearBtn) clearBtn.addEventListener('click', () => { clearPathFromMaps(); hideDirectionsFloorNav(); document.getElementById('infoPanel').classList.add('hidden'); });

    // (toolbar Clear removed) sidebar Clear is primary for desktop too — no duplicate toolbar control needed.
    
    document.querySelectorAll('.quick-btn').forEach(btn =>
        btn.addEventListener('click', handleQuickAccess)
    );
    
    document.querySelectorAll('.view-btn').forEach(btn =>
        btn.addEventListener('click', () => switchView(btn.dataset.view))
    );
    
    document.getElementById('zoomIn').addEventListener('click', () => {
        const mapWrapper = document.getElementById('mapWrapper');
        const rect = mapWrapper.getBoundingClientRect();
        const hoverInside = lastHoverClientX !== null && lastHoverClientY !== null &&
            lastHoverClientX >= rect.left && lastHoverClientX <= rect.right &&
            lastHoverClientY >= rect.top && lastHoverClientY <= rect.bottom;
        const cx = hoverInside ? lastHoverClientX : (rect.left + rect.width/2);
        const cy = hoverInside ? lastHoverClientY : (rect.top + rect.height/2);
        changeZoom(0.1, cx, cy);
    });
    document.getElementById('zoomOut').addEventListener('click', () => {
        const mapWrapper = document.getElementById('mapWrapper');
        const rect = mapWrapper.getBoundingClientRect();
        const hoverInside = lastHoverClientX !== null && lastHoverClientY !== null &&
            lastHoverClientX >= rect.left && lastHoverClientX <= rect.right &&
            lastHoverClientY >= rect.top && lastHoverClientY <= rect.bottom;
        const cx = hoverInside ? lastHoverClientX : (rect.left + rect.width/2);
        const cy = hoverInside ? lastHoverClientY : (rect.top + rect.height/2);
        changeZoom(-0.1, cx, cy);
    });
    document.getElementById('resetView').addEventListener('click', resetMapTransform);
}

/*************************************************
 * MAP INTERACTION (pointer + inertia + pinch)
 *************************************************/
function setupMapInteractions() {
    const mapWrapper = document.getElementById('mapWrapper');

    // Keep click handling for location taps
    mapWrapper.addEventListener('click', (e) => {
        const clickable = e.target.closest('.location-rect, .campus-path, .location-path, .location-pathz');
        if (clickable) {
            e.stopPropagation();
            e.preventDefault();
            const id = clickable.id;
            if (id) handleLocationClick(id);
            return;
        }
    });

    // Unified pointer-based dragging (works for mouse, touch, pen)
    mapWrapper.addEventListener('pointerdown', e => {
        // If the user clicked a UI control inside the map (floor-nav, directions nav, picker, buttons)
        // we should NOT start a pan — allow the control to receive the event instead.
        const uiControl = e.target.closest('button, .floor-nav, .directions-floor-nav, .mobile-map-bar, .mobile-map-btn, .mobile-get-btn, .mobile-clear-btn, .floor-btn, .dir-nav-btn, .floor-nav-btn, .view-btn');
        if (uiControl) return;

        const clickable = e.target.closest('.location-rect, .campus-path, .location-path, .location-pathz');
        if (clickable) return;

        // Grab pointer and start tracking
        try { mapWrapper.setPointerCapture && mapWrapper.setPointerCapture(e.pointerId); } catch (err) {}
        isPointerDown = true;
        pointerId = e.pointerId;
        lastPositions = [{ x: e.clientX, y: e.clientY, t: performance.now() }];
        dragStartX = e.clientX - translateX;
        dragStartY = e.clientY - translateY;
        document.body.classList.add('no-select');
        mapWrapper.classList.add('dragging');

        // Cancel any inertia in progress
        if (inertiaRaf) { cancelAnimationFrame(inertiaRaf); inertiaRaf = null; velocityX = velocityY = 0; }
    });

    document.addEventListener('pointermove', e => {
        // always keep a recent hover/touch location (client coords) so zoom buttons can use cursor/tap
        lastHoverClientX = e.clientX;
        lastHoverClientY = e.clientY;

        if (!isPointerDown || e.pointerId !== pointerId) return;
        const now = performance.now();
        const x = e.clientX;
        const y = e.clientY;

        // Update translate from drag
        translateX = x - dragStartX;
        translateY = y - dragStartY;

        // Record sample for velocity estimation
        lastPositions.push({ x, y, t: now });
        if (lastPositions.length > 6) lastPositions.shift();

        scheduleUpdate();
    });

    document.addEventListener('pointerup', e => {
        if (!isPointerDown || e.pointerId !== pointerId) return;
        isPointerDown = false;
        pointerId = null;
        document.body.classList.remove('no-select');
        mapWrapper.classList.remove('dragging');

        // Estimate velocity from samples
        if (lastPositions.length >= 2) {
            const a = lastPositions[0];
            const b = lastPositions[lastPositions.length - 1];
            const dt = (b.t - a.t) / 1000;
            if (dt > 0) {
                velocityX = (b.x - a.x) / dt;
                velocityY = (b.y - a.y) / dt;
                startInertia();
            }
        }
    });

    // Wheel zoom for desktop (zoom towards cursor)
    mapWrapper.addEventListener('wheel', e => {
        e.preventDefault();
        changeZoom(e.deltaY < 0 ? 0.1 : -0.1, e.clientX, e.clientY);
    }, { passive: false });

    // Maintain existing pinch-to-zoom for two-finger touch (better than relying on browser zoom)
    let lastDistance = 0;
    mapWrapper.addEventListener('touchstart', e => {
        if (e.touches.length === 2) {
            lastDistance = 0; // reset
        }
    }, { passive: true });

    mapWrapper.addEventListener('touchmove', e => {
        if (e.touches && e.touches.length === 2) {
            e.preventDefault();
            const t1 = e.touches[0];
            const t2 = e.touches[1];
            const distance = Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);
            if (lastDistance > 0) {
                const delta = distance - lastDistance;
                const centerX = (t1.clientX + t2.clientX) / 2;
                const centerY = (t1.clientY + t2.clientY) / 2;
                // keep hover point updated so UI (zoom buttons etc.) know latest focal point
                lastHoverClientX = centerX;
                lastHoverClientY = centerY;
                changeZoom(delta > 0 ? 0.06 : -0.06, centerX, centerY);
            }
            lastDistance = distance;
        } else if (e.touches && e.touches.length === 1) {
            // track single-finger location for better mobile UX (used by double-tap / zoom buttons)
            const t = e.touches[0];
            lastHoverClientX = t.clientX;
            lastHoverClientY = t.clientY;
        }
    }, { passive: false });

    mapWrapper.addEventListener('touchend', () => {
        lastDistance = 0;
    }, { passive: true });

    // Double-tap to zoom (mobile friendly)
    let lastTap = 0;
    mapWrapper.addEventListener('touchstart', e => {
        const now = Date.now();
        const tapInterval = now - lastTap;
        lastTap = now;
        if (tapInterval > 0 && tapInterval < 300) {
            // double-tap detected -> toggle zoom between 1 and 2 around tap point
            const touch = e.touches && e.touches[0];
            const cx = touch ? touch.clientX : undefined;
            const cy = touch ? touch.clientY : undefined;
            const target = (zoomLevel > 1.4) ? 1 : Math.min(2, zoomLevel * 2);
            e.preventDefault(); // prevent browser's double-tap zoom
            setZoom(target, cx, cy);
        }
    }, { passive: false });
}

// Schedule an rAF update (coalesces frequent events)
function scheduleUpdate() {
    if (rafScheduled) return;
    rafScheduled = true;
    requestAnimationFrame(() => {
        applyTransform();
        rafScheduled = false;
    });
}

// Apply current transform using GPU-friendly scale then translate (keeps math consistent with focal zoom)
function applyTransform() {
    const map = document.querySelector('.floor-map.active');
    if (map) {
        // Apply scale first, then translate so translateX/Y represent screen-space offsets
        map.style.transform = `scale(${zoomLevel}) translate3d(${translateX}px, ${translateY}px, 0)`;
    }
}

// Smooth inertia after user releases pointer
function startInertia() {
    const friction = 0.92;
    const step = () => {
        velocityX *= friction;
        velocityY *= friction;
        translateX += velocityX * (1 / 60);
        translateY += velocityY * (1 / 60);
        applyTransform();
        if (Math.abs(velocityX) > 0.5 || Math.abs(velocityY) > 0.5) {
            inertiaRaf = requestAnimationFrame(step);
        } else {
            inertiaRaf = null;
            velocityX = velocityY = 0;
        }
    };
    if (inertiaRaf) cancelAnimationFrame(inertiaRaf);
    inertiaRaf = requestAnimationFrame(step);
} 

function handleLocationClick(id) {
    const name = getLocationName(id);
    if (!selectedStart) {
        selectedStart = id;
        const startEl = document.getElementById('startLocation');
        if (startEl) {
            startEl.value = name;
            startEl.dataset.id = id;
        }
    } else {
        selectedDestination = id;
        const destEl = document.getElementById('destination');
        if (destEl) {
            destEl.value = name;
            destEl.dataset.id = id;
        }
    }
    updateMapHighlights();
}

function updateMapHighlights() {
    document.querySelectorAll('.location-rect, .campus-path, .location-path, .location-pathz').forEach(el => {
        el.classList.toggle('start', el.id === selectedStart);
        el.classList.toggle('destination', el.id === selectedDestination);
    });
}

/*************************************************
 * DIRECTIONS HANDLING
 *************************************************/
function handleGetDirections() {
    // Get selected location IDs from the new searchable dropdowns
    selectedStart = getSelectedLocationId('startLocation');
    selectedDestination = getSelectedLocationId('destination');
    
    if (!selectedStart || !selectedDestination) {
        alert('Please select both start and destination.');
        return;
    }
    
    if (selectedStart === selectedDestination) {
        alert('Start and destination cannot be the same.');
        return;
    }
    
    const path = findPath(selectedStart, selectedDestination);
    
    if (path) {
        currentPath = path;
        const directions = generateDirections(path);
        
        // Auto-switch to appropriate view
        const startLoc = locations.find(l => l.id === selectedStart);
        const destLoc = locations.find(l => l.id === selectedDestination);
        
        if (startLoc && startLoc.view !== currentView) {
            switchView(startLoc.view);
            // Switch to the start floor after view switch
            if (startLoc && startLoc.floor) {
                currentFloor = startLoc.floor;
                switchFloor(currentFloor);
            }
            setTimeout(() => {
                drawPathOnMap(path);
                displayRouteInfo(getLocationName(selectedStart), getLocationName(selectedDestination), directions);
                // Show directions floor navigation if route crosses multiple floors
                const routeFloors = getRouteFloorsFromPath(path);
                if (routeFloors.length > 1) {
                    const startIdx = Math.max(0, routeFloors.indexOf(startLoc ? startLoc.floor : ''));
                    showDirectionsFloorNav(routeFloors, startIdx);
                } else {
                    hideDirectionsFloorNav();
                }
            }, 100);
        } else {
            // Switch to the start floor
            if (startLoc && startLoc.floor) {
                currentFloor = startLoc.floor;
                updateFloorSelector(currentView);
                switchFloor(currentFloor);
            }
            drawPathOnMap(path);
            displayRouteInfo(getLocationName(selectedStart), getLocationName(selectedDestination), directions);
            // Show directions floor navigation if route crosses multiple floors
            const routeFloors = getRouteFloorsFromPath(path);
            if (routeFloors.length > 1) {
                const startIdx = Math.max(0, routeFloors.indexOf(startLoc ? startLoc.floor : ''));
                showDirectionsFloorNav(routeFloors, startIdx);
            } else {
                hideDirectionsFloorNav();
            }
        }
    } else {
        alert('No route found between these locations.');
    }
}

function displayRouteInfo(start, end, directions) {
    let html = `
        <p><strong>From:</strong> ${start}</p>
        <p><strong>To:</strong> ${end}</p>
        <div class="steps" style="margin-top: 15px;">
            <strong>Directions:</strong>
            <ol style="margin-top: 8px; padding-left: 20px;">
    `;
    
    directions.forEach(step => {
        html += `<li style="margin: 5px 0;">${step}</li>`;
    });
    
    html += `
            </ol>
        </div>
    `;
    
    displayInfo(html);
}

function displayInfo(html) {
    document.getElementById('infoContent').innerHTML = html;
    document.getElementById('infoPanel').classList.remove('hidden');
}

/*************************************************
 * VIEW & ZOOM
 *************************************************/
function switchView(view) {
    document.querySelectorAll('.floor-map').forEach(map => {
        map.style.transform = '';
        map.classList.remove('active');
    });
    
    const newMap = document.getElementById(view + 'Map');
    if (newMap) {
        newMap.classList.add('active');
    }
    
    document.querySelectorAll('.view-btn').forEach(btn =>
        btn.classList.toggle('active', btn.dataset.view === view)
    );
    
    currentView = view;
    updateFloorSelector(view);
    resetMapTransform();
    // keep mobile UI in sync
    updateMobileMapLabel(view);
    
    // Redraw path if exists
    if (currentPath.length > 0) {
        setTimeout(() => drawPathOnMap(currentPath), 50);
    }
}

function updateFloorSelector(view) {
    const floorSelector = document.getElementById('floorSelector');
    const floorButtonsContainer = document.getElementById('floorButtonsContainer');
    // keep floor nav label in sync if present
    updateFloorNavState();
    
    if (floorMap[view] && floorMap[view].length > 1) {
        floorSelector.classList.remove('hidden');
        floorButtonsContainer.innerHTML = '';
        
        floorMap[view].forEach(floor => {
            const button = document.createElement('button');
            button.className = 'floor-btn';
            button.textContent = floor.name;
            button.dataset.floorId = floor.id;
            
            if (currentFloor === floor.id) {
                button.classList.add('active');
            }
            
            button.addEventListener('click', () => {
                document.querySelectorAll('.floor-btn').forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                switchFloor(floor.id);
            });
            
            floorButtonsContainer.appendChild(button);
        });
        
        if (!currentFloor && floorMap[view].length > 0) {
            currentFloor = floorMap[view][0].id;
            document.querySelector(`[data-floor-id="${currentFloor}"]`)?.classList.add('active');
            switchFloor(currentFloor);
        }
    } else if (floorMap[view] && floorMap[view].length === 1) {
        floorSelector.classList.add('hidden');
        currentFloor = floorMap[view][0].id;
        switchFloor(currentFloor);
    } else {
        floorSelector.classList.add('hidden');
        currentFloor = '';
    }

    // Then update visibility of the floating floor navigation UI
    updateFloorNavVisibility();
}

/**
 * Floor navigation UI in the map wrapper (previous / next)
 */
function initFloorNav() {
    const prevBtn = document.getElementById('prevFloorBtn');
    const nextBtn = document.getElementById('nextFloorBtn');
    const label = document.getElementById('floorNavLabel');

    if (!prevBtn || !nextBtn || !label) return;

    prevBtn.addEventListener('click', () => {
        navigateFloor(-1);
    });
    nextBtn.addEventListener('click', () => {
        navigateFloor(1);
    });

    updateFloorNavState();
}

function getFloorsForCurrentView() {
    return floorMap[currentView] || [];
}

function navigateFloor(delta) {
    const floors = getFloorsForCurrentView();
    if (!floors || floors.length === 0) return;

    const idx = floors.findIndex(f => f.id === currentFloor);
    if (idx === -1) return;

    let nextIdx = idx + delta;
    if (nextIdx < 0) nextIdx = 0;
    if (nextIdx >= floors.length) nextIdx = floors.length - 1;

    const nextFloor = floors[nextIdx];
    if (!nextFloor) return;

    currentFloor = nextFloor.id;
    switchFloor(currentFloor, { preserveTransform: true });
    updateFloorSelector(currentView);
    updateFloorNavState();
}

function updateFloorNavState() {
    const label = document.getElementById('floorNavLabel');
    const prevBtn = document.getElementById('prevFloorBtn');
    const nextBtn = document.getElementById('nextFloorBtn');

    if (!label || !prevBtn || !nextBtn) return;

    const floors = getFloorsForCurrentView();
    if (!floors || floors.length === 0) {
        label.textContent = '';
        prevBtn.disabled = true;
        nextBtn.disabled = true;
        return;
    }

    const idx = floors.findIndex(f => f.id === currentFloor);
    if (idx === -1) {
        label.textContent = '';
        prevBtn.disabled = true;
        nextBtn.disabled = true;
        return;
    }

    label.textContent = `${floors[idx].name} (${idx + 1}/${floors.length})`;
    prevBtn.disabled = idx === 0;
    nextBtn.disabled = idx === floors.length - 1;

    // Also ensure the nav is visible if it should be
    updateFloorNavVisibility();
}

/* --- Directions-specific floor nav: visible only when a route spans multiple floors --- */
function initDirectionsFloorNav() {
    const prev = document.getElementById('dirPrevBtn');
    const next = document.getElementById('dirNextBtn');
    const label = document.getElementById('dirFloorLabel');
    if (!prev || !next || !label) return;
    prev.addEventListener('click', () => navigateRouteFloor(-1));
    next.addEventListener('click', () => navigateRouteFloor(1));
    hideDirectionsFloorNav();
}

// Show/hide the floating floor nav depending on whether the current view has multiple floors
function updateFloorNavVisibility() {
    const nav = document.getElementById('floorNav');
    if (!nav) return;

    const floors = floorMap[currentView] || [];
    if (floors.length > 1) {
        nav.classList.remove('hidden');
        nav.setAttribute('aria-hidden', 'false');
        // NOTE: don't call updateFloorNavState() here — it also calls
        // updateFloorNavVisibility(), which would create recursion.
        // Callers which need both visibility and state should call
        // updateFloorNavState() explicitly after changing view/floor.
    } else {
        nav.classList.add('hidden');
        nav.setAttribute('aria-hidden', 'true');
    }
}

function getRouteFloorsFromPath(path) {
    const floors = [];
    path.forEach(id => {
        const loc = locations.find(l => l.id === id);
        if (!loc || !loc.floor) return;
        if (floors.length === 0 || floors[floors.length - 1] !== loc.floor) floors.push(loc.floor);
    });
    return floors;
}

function showDirectionsFloorNav(floors, initialIndex = 0) {
    currentRouteFloors = floors.slice();
    currentRouteFloorIndex = Math.min(Math.max(initialIndex, 0), currentRouteFloors.length - 1);
    const nav = document.getElementById('directionsFloorNav');
    if (!nav) return;

    // If the mobile map bar is visible, nudge the directions nav up so they don't overlap
    const mobileBar = document.getElementById('mobileMapBar');
    if (mobileBar && !mobileBar.classList.contains('hidden')) {
        const h = Math.round(mobileBar.getBoundingClientRect().height);
        nav.style.bottom = `${h + 24}px`;
    } else {
        nav.style.bottom = '16px';
    }

    nav.classList.remove('hidden');
    nav.setAttribute('aria-hidden', 'false');
    updateDirectionsFloorNavState();
}

function hideDirectionsFloorNav() {
    currentRouteFloors = [];
    currentRouteFloorIndex = 0;
    const nav = document.getElementById('directionsFloorNav');
    if (!nav) return;
    nav.classList.add('hidden');
    nav.setAttribute('aria-hidden', 'true');
    // reset any inline bottom offset we applied when mobile bar was visible
    nav.style.bottom = '';
}

function updateDirectionsFloorNavState() {
    const prev = document.getElementById('dirPrevBtn');
    const next = document.getElementById('dirNextBtn');
    const label = document.getElementById('dirFloorLabel');
    if (!label || !prev || !next) return;
    if (!currentRouteFloors || currentRouteFloors.length === 0) {
        label.textContent = '';
        prev.disabled = true;
        next.disabled = true;
        return;
    }
    // Sync index with the current floor if user changed floor manually
    const foundIdx = currentRouteFloors.indexOf(currentFloor);
    if (foundIdx !== -1) currentRouteFloorIndex = foundIdx;

    const idx = currentRouteFloorIndex;
    const floorId = currentRouteFloors[idx];
    const floor = (floorMap[currentView] || []).find(f => f.id === floorId);
    const name = floor ? floor.name : floorId;
    label.textContent = `${name} (${idx + 1}/${currentRouteFloors.length})`;
    prev.disabled = idx === 0;
    next.disabled = idx === currentRouteFloors.length - 1;
}

function navigateRouteFloor(delta) {
    if (!currentRouteFloors || currentRouteFloors.length === 0) return;
    let idx = currentRouteFloorIndex + delta;
    if (idx < 0) idx = 0;
    if (idx >= currentRouteFloors.length) idx = currentRouteFloors.length - 1;
    currentRouteFloorIndex = idx;
    const floorId = currentRouteFloors[currentRouteFloorIndex];
    if (!floorId) return;
    currentFloor = floorId;
    switchFloor(currentFloor, { preserveTransform: true });
    updateDirectionsFloorNavState();
    // keep the floating floor nav (desktop) visible when navigating route floors
    updateFloorNavVisibility();
}

function switchFloor(floorMapId, options = {}) {
    // options: { preserveTransform: boolean }
    if (!floorMapId) return;
    
    document.querySelectorAll('.floor-map').forEach(map => {
        map.classList.remove('active');
    });
    
    // Update floor button highlighting
    document.querySelectorAll('.floor-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.floorId === floorMapId);
    });
    
    const selectedFloor = document.getElementById(floorMapId);
    if (selectedFloor) {
        selectedFloor.classList.add('active');
        currentFloor = floorMapId;
        if (!options.preserveTransform) {
            resetMapTransform();
        }
        updateMapHighlights();
        
        // Redraw path on floor switch
        if (currentPath.length > 0) {
            setTimeout(() => drawPathOnMap(currentPath), 50);
        }
        // ensure directions nav (if visible) reflects the new floor
        updateDirectionsFloorNavState();
        // ensure the floating floor nav visibility is correct after switching as well
        updateFloorNavVisibility();
    }
}

function setZoom(newZoom, clientX, clientY) {
    const mapWrapper = document.getElementById('mapWrapper');
    const rect = mapWrapper ? mapWrapper.getBoundingClientRect() : { left: 0, top: 0, width: window.innerWidth, height: window.innerHeight };

    // Default to center of wrapper if no point provided
    if (clientX === undefined || clientY === undefined) {
        clientX = rect.left + rect.width / 2;
        clientY = rect.top + rect.height / 2;
    }

    // Coordinates relative to wrapper top-left
    const cx = clientX - rect.left;
    const cy = clientY - rect.top;

    const oldZoom = zoomLevel;
    newZoom = Math.min(Math.max(newZoom, 0.5), 3);

    if (oldZoom === 0) {
        zoomLevel = newZoom;
        scheduleUpdate();
        document.getElementById('zoomLevel').textContent = `${Math.round(zoomLevel * 100)}%`;
        return;
    }

    // Compute focal point in map-local space, then set translate so the focal screen point stays fixed
    // mapLocal = (screenPoint - translate) / oldZoom
    const localX = (cx - translateX) / oldZoom;
    const localY = (cy - translateY) / oldZoom;

    // new translate so that: cx = newTranslate + newZoom * localX
    translateX = cx - newZoom * localX;
    translateY = cy - newZoom * localY;

    zoomLevel = newZoom;
    scheduleUpdate();
    document.getElementById('zoomLevel').textContent = `${Math.round(zoomLevel * 100)}%`;
}

function changeZoom(amount, clientX, clientY) {
    setZoom(zoomLevel + amount, clientX, clientY);
}

function updateMapTransform() {
    // Backwards compatible alias: schedule an rAF update
    scheduleUpdate();
}

function resetMapTransform() {
    zoomLevel = 1;
    translateX = 0;
    translateY = 0;

    document.querySelectorAll('.floor-map').forEach(map => {
        map.style.transform = '';
    });

    const activeMap = document.querySelector('.floor-map.active');
    if (activeMap) {
        // Keep same transform order as applyTransform: scale then translate
        activeMap.style.transform = 'scale(1) translate3d(0px, 0px, 0)';
    }

    document.getElementById('zoomLevel').textContent = '100%';
} 

/*************************************************
 * HELPERS
 *************************************************/
function getLocationName(id) {
    const loc = locations.find(l => l.id === id);
    return loc ? loc.name : 'Unknown';
}

function handleQuickAccess(e) {
    const type = e.target.dataset.type;
    const location = locations.filter(loc => !loc.hidden).find(loc => loc.type === type);
    
    if (!location) return;
    
    switchView(location.view);
    selectedDestination = location.id;
    document.getElementById('destination').value = location.id;
    updateMapHighlights();
}

/*************************************************
 * MOBILE MENU FUNCTIONALITY
 *************************************************/
function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarClose = document.getElementById('sidebarClose');

    if (!mobileMenuToggle || !sidebar || !sidebarClose) return;

    // Toggle menu on hamburger click
    mobileMenuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });

    // Close menu on close button click
    sidebarClose.addEventListener('click', () => {
        sidebar.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            sidebar.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    });

    // Close menu when a selection is made (auto-dismiss on mobile)
    const buttons = sidebar.querySelectorAll('.quick-btn, .view-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    });
}

/*************************************************
 * START APP
 *************************************************/
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    init();
    setupSearchableDropdowns();
});