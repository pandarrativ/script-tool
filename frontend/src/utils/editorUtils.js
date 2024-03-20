export const getFromRawContent = (rawContent) => {
    let content = "";
    for(let i =0; i<rawContent.blocks.length; i++){
      content += rawContent.blocks[i].text + "\n";
    }
    return content;
}








export const getEmptyRawContent = () => {
  return (
    {
      "blocks": [
        {
          "key": "cl8cd",
          "text": "",
          "type": "header-one",
          "depth": 0,
          "inlineStyleRanges": [],
          "entityRanges": [],
          "data": {}
        }
      ],
      "entityMap": {}
    }
  );
}



// Editor content styles settings
export const getThreeActStructure = () => {
    return (
        {
            "blocks": [
                {
                    "key": "cl8cd",
                    "text": "Act 1: Setup",
                    "type": "header-one",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 0,
                            "length": 12,
                            "style": "UNDERLINE"
                        }
                    ],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "2vouj",
                    "text": "Opening Image: ",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 0,
                            "length": 13,
                            "style": "BOLD"
                        }
                    ],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "8ia3h",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "6spmd",
                    "text": "Theme Stated: ",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 0,
                            "length": 12,
                            "style": "BOLD"
                        }
                    ],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "6i5p",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "clurp",
                    "text": "Set-Up: ",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 0,
                            "length": 6,
                            "style": "BOLD"
                        }
                    ],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "dglir",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "4r4f7",
                    "text": "Catalyst: ",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 0,
                            "length": 8,
                            "style": "BOLD"
                        }
                    ],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "evr63",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "7jit1",
                    "text": "Debate: ",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 0,
                            "length": 6,
                            "style": "BOLD"
                        }
                    ],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "c0dsh",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "1kmgp",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "9ibin",
                    "text": "Act 2: Confrontation",
                    "type": "header-three",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 0,
                            "length": 20,
                            "style": "UNDERLINE"
                        }
                    ],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "2jme7",
                    "text": "Break into Two: ",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 0,
                            "length": 14,
                            "style": "BOLD"
                        }
                    ],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "cn6h4",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "8041i",
                    "text": "Fun and Games: ",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 0,
                            "length": 13,
                            "style": "BOLD"
                        }
                    ],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "3jnpe",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "c8qo",
                    "text": "Midpoint: ",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 0,
                            "length": 8,
                            "style": "BOLD"
                        }
                    ],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "948ie",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "cvooo",
                    "text": "Bad Guys Close In: ",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 0,
                            "length": 17,
                            "style": "BOLD"
                        }
                    ],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "bsgv0",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "4h6r",
                    "text": "All Is Lost: ",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 0,
                            "length": 11,
                            "style": "BOLD"
                        }
                    ],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "8c925",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "4ups5",
                    "text": "Dark Night of the Soul: ",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 0,
                            "length": 22,
                            "style": "BOLD"
                        }
                    ],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "1irsr",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "7e77d",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "3kcp2",
                    "text": "Act 3: Resolution",
                    "type": "header-three",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 0,
                            "length": 17,
                            "style": "UNDERLINE"
                        }
                    ],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "f83ui",
                    "text": "Break into Three: ",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 0,
                            "length": 16,
                            "style": "BOLD"
                        }
                    ],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "ca8rd",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "b0l9f",
                    "text": "Finale: ",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 0,
                            "length": 6,
                            "style": "BOLD"
                        }
                    ],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "c9i3p",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "18dpi",
                    "text": "Closing Image: ",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 0,
                            "length": 13,
                            "style": "BOLD"
                        }
                    ],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "a4gkv",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                }
            ],
            "entityMap": {}
        }
    );
}

export const structureThreeActResponse = (data) => {
    return (
        {
            "blocks": [
                {
                    "key": "cl8cd",
                    "text": "Act 1: Setup",
                    "type": "header-one",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 0,
                            "length": 12,
                            "style": "UNDERLINE"
                        }
                    ],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "2vouj",
                    "text": "Opening Image: " + data.Action1["Opening Image"],
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 0,
                            "length": 13,
                            "style": "BOLD"
                        }
                    ],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "8ia3h",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "6spmd",
                    "text": "Theme Stated: "+ data.Action1["Theme Stated"],
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 0,
                            "length": 12,
                            "style": "BOLD"
                        }
                    ],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "6i5p",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "clurp",
                    "text": "Set-Up: " + data.Action1["Set-Up"],
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 0,
                            "length": 6,
                            "style": "BOLD"
                        }
                    ],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "dglir",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "4r4f7",
                    "text": "Catalyst: " + data.Action1["Catalyst"],
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 0,
                            "length": 8,
                            "style": "BOLD"
                        }
                    ],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "evr63",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "7jit1",
                    "text": "Debate: " + data.Action1["Debate"],
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 0,
                            "length": 6,
                            "style": "BOLD"
                        }
                    ],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "c0dsh",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "1kmgp",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "9ibin",
                    "text": "Act 2: Confrontation",
                    "type": "header-three",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 0,
                            "length": 20,
                            "style": "UNDERLINE"
                        }
                    ],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "2jme7",
                    "text": "Break into Two: " + data.Action2["Break into Two"],
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 0,
                            "length": 14,
                            "style": "BOLD"
                        }
                    ],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "cn6h4",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "8041i",
                    "text": "Fun and Games: " + data.Action2["Fun and Games"],
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 0,
                            "length": 13,
                            "style": "BOLD"
                        }
                    ],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "3jnpe",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "c8qo",
                    "text": "Midpoint: " + data.Action2["Midpoint"],
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 0,
                            "length": 8,
                            "style": "BOLD"
                        }
                    ],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "948ie",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "cvooo",
                    "text": "Bad Guys Close In: " + data.Action2["Bad Guys Close In"],
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 0,
                            "length": 17,
                            "style": "BOLD"
                        }
                    ],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "bsgv0",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "4h6r",
                    "text": "All Is Lost: " + data.Action2["All Is Lost"],
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 0,
                            "length": 11,
                            "style": "BOLD"
                        }
                    ],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "8c925",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "4ups5",
                    "text": "Dark Night of the Soul: " + data.Action2["Dark Night of the Soul"],
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 0,
                            "length": 22,
                            "style": "BOLD"
                        }
                    ],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "1irsr",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "7e77d",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "3kcp2",
                    "text": "Act 3: Resolution",
                    "type": "header-three",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 0,
                            "length": 17,
                            "style": "UNDERLINE"
                        }
                    ],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "f83ui",
                    "text": "Break into Three: " + data.Action3["Break into Three"],
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 0,
                            "length": 16,
                            "style": "BOLD"
                        }
                    ],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "ca8rd",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "b0l9f",
                    "text": "Finale: " + data.Action3["Finale"],
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 0,
                            "length": 6,
                            "style": "BOLD"
                        }
                    ],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "c9i3p",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "18dpi",
                    "text": "Closing Image: " + data.Action3["Closing Image"],
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 0,
                            "length": 13,
                            "style": "BOLD"
                        }
                    ],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "a4gkv",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                }
            ],
            "entityMap": {}
        }
    );
}


export const getHeroJourneyStructure =() => {
    return (
        {
            "blocks": [
              {
                "key": "78dgk",
                "text": "Ordinary World: ",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 16,
                    "style": "BOLD"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "e0fcd",
                "text": "",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "56bit",
                "text": "Call to Adventure: ",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 19,
                    "style": "BOLD"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "8vjp1",
                "text": "",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "5fd93",
                "text": "Refusal of the Call: ",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 21,
                    "style": "BOLD"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "8fbt1",
                "text": "",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "6dtsu",
                "text": "Meeting with the Mentor: ",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 25,
                    "style": "BOLD"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "8vi6o",
                "text": "",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "bcs2q",
                "text": "Crossing the Threshold: ",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 24,
                    "style": "BOLD"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "fk648",
                "text": "",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "86rt8",
                "text": "Tests, Allies, Enemies: ",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 24,
                    "style": "BOLD"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "3p4kl",
                "text": "",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "68v36",
                "text": "Approach to the Inmost Cave: ",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 29,
                    "style": "BOLD"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "eujhc",
                "text": "",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "cc7lt",
                "text": "Ordeal: ",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 8,
                    "style": "BOLD"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "9ndp2",
                "text": "",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "6t9o1",
                "text": "Reward: ",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 8,
                    "style": "BOLD"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "1ga6v",
                "text": "",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "1am82",
                "text": "The Road Back: ",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 15,
                    "style": "BOLD"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "5argt",
                "text": "",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "49skr",
                "text": "Resurrection: ",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 14,
                    "style": "BOLD"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "7f6u",
                "text": "",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "eaguu",
                "text": "Return with the Elixir: ",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 24,
                    "style": "BOLD"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "9ml3m",
                "text": "",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [],
                "entityRanges": [],
                "data": {}
              }
            ],
            "entityMap": {}
          }
    );
}

export const structureHeroJourneyResponse =(data) => {
    return (
        {
            "blocks": [
              {
                "key": "78dgk",
                "text": "Ordinary World: " + data["Ordinary World"],
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 16,
                    "style": "BOLD"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "e0fcd",
                "text": "",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "56bit",
                "text": "Call to Adventure: " + data["Call to Adventure"],
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 19,
                    "style": "BOLD"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "8vjp1",
                "text": "",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "5fd93",
                "text": "Refusal of the Call: " +data["Refusal of the Call"],
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 21,
                    "style": "BOLD"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "8fbt1",
                "text": "",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "6dtsu",
                "text": "Meeting with the Mentor: " +data["Meeting with the Mentor"],
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 25,
                    "style": "BOLD"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "8vi6o",
                "text": "",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "bcs2q",
                "text": "Crossing the Threshold: " + data["Crossing the Threshold"],
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 24,
                    "style": "BOLD"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "fk648",
                "text": "",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "86rt8",
                "text": "Tests, Allies, Enemies: " + data["Tests, Allies, Enemies"],
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 24,
                    "style": "BOLD"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "3p4kl",
                "text": "",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "68v36",
                "text": "Approach to the Inmost Cave: " +data["Approach to the Inmost Cave"],
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 29,
                    "style": "BOLD"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "eujhc",
                "text": "",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "cc7lt",
                "text": "Ordeal: " + data["Ordeal"],
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 8,
                    "style": "BOLD"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "9ndp2",
                "text": "",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "6t9o1",
                "text": "Reward: " +data["Reward"],
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 8,
                    "style": "BOLD"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "1ga6v",
                "text": "",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "1am82",
                "text": "The Road Back: " +data["The Road Back"],
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 15,
                    "style": "BOLD"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "5argt",
                "text": "",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "49skr",
                "text": "Resurrection: " + data["Resurrection"],
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 14,
                    "style": "BOLD"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "7f6u",
                "text": "",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "eaguu",
                "text": "Return with the Elixir: " + data["Return with the Elixir"],
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 24,
                    "style": "BOLD"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "9ml3m",
                "text": "",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [],
                "entityRanges": [],
                "data": {}
              }
            ],
            "entityMap": {}
          }
    );
}

export const getFiveActStructure =() => {
    return (
        {
            "blocks": [
              {
                "key": "78dgk",
                "text": "Exposition: ",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 11,
                    "style": "BOLD"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "8tltb",
                "text": "",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "58hmd",
                "text": "Rising Action:",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 14,
                    "style": "BOLD"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "663ia",
                "text": "",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "1nnjk",
                "text": "Climax: ",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 7,
                    "style": "BOLD"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "1rqnf",
                "text": "",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "2sd1a",
                "text": "Falling Action: ",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 15,
                    "style": "BOLD"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "3ks8p",
                "text": "",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "f050n",
                "text": "Denouement/Resolution: ",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 22,
                    "style": "BOLD"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "9ifi1",
                "text": "",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [],
                "entityRanges": [],
                "data": {}
              }
            ],
            "entityMap": {}
          }
    );
}

export const structureFiveActResponse =(data) => {
    return (
        {
            "blocks": [
              {
                "key": "78dgk",
                "text": "Exposition: " + data["Exposition"],
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 11,
                    "style": "BOLD"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "8tltb",
                "text": "",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "58hmd",
                "text": "Rising Action:" +data["Rising Action"],
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 14,
                    "style": "BOLD"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "663ia",
                "text": "",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "1nnjk",
                "text": "Climax: " + data["Climax"],
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 7,
                    "style": "BOLD"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "1rqnf",
                "text": "",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "2sd1a",
                "text": "Falling Action: " + data["Falling Action"],
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 15,
                    "style": "BOLD"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "3ks8p",
                "text": "",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "f050n",
                "text": "Denouement/Resolution: " + data["Denouement/Resolution"],
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 22,
                    "style": "BOLD"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "9ifi1",
                "text": "",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [],
                "entityRanges": [],
                "data": {}
              }
            ],
            "entityMap": {}
          }
    );
}

export const getSevenPointStructure =() => {
    return (
        {
            "blocks": [
              {
                "key": "78dgk",
                "text": "Hook: ",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 5,
                    "style": "BOLD"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "743rm",
                "text": "",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "ba40l",
                "text": "Plot Turn 1: ",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 12,
                    "style": "BOLD"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "d56tb",
                "text": "",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "8hpt5",
                "text": "Pinch Point 1: ",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 14,
                    "style": "BOLD"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "3faj",
                "text": "",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "3eo1k",
                "text": "Midpoint: ",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 9,
                    "style": "BOLD"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "1etcc",
                "text": "",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "687dp",
                "text": "Pinch Point 2: ",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 14,
                    "style": "BOLD"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "cek7m",
                "text": "",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "3mp3",
                "text": "Plot Turn 2: ",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 12,
                    "style": "BOLD"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "eq2j3",
                "text": "",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "csl6p",
                "text": "Resolution: ",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 11,
                    "style": "BOLD"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "2th91",
                "text": "",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [],
                "entityRanges": [],
                "data": {}
              }
            ],
            "entityMap": {}
          }
    );
}

export const structureSevenPointResponse =(data) => {
    return (
        {
            "blocks": [
              {
                "key": "78dgk",
                "text": "Hook: " + data["Hook"],
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 5,
                    "style": "BOLD"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "743rm",
                "text": "",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "ba40l",
                "text": "Plot Turn 1: " + data["Plot Turn 1"],
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 12,
                    "style": "BOLD"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "d56tb",
                "text": "",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "8hpt5",
                "text": "Pinch Point 1: " + data["Pinch Point 1"],
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 14,
                    "style": "BOLD"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "3faj",
                "text": "",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "3eo1k",
                "text": "Midpoint: " +data["Midpoint"],
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 9,
                    "style": "BOLD"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "1etcc",
                "text": "",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "687dp",
                "text": "Pinch Point 2: " +data["Pinch Point 2"],
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 14,
                    "style": "BOLD"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "cek7m",
                "text": "",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "3mp3",
                "text": "Plot Turn 2: " +data["Plot Turn 2"],
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 12,
                    "style": "BOLD"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "eq2j3",
                "text": "",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "csl6p",
                "text": "Resolution: " +data["Resolution"],
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 11,
                    "style": "BOLD"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "2th91",
                "text": "",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [],
                "entityRanges": [],
                "data": {}
              }
            ],
            "entityMap": {}
          }
    );
}



// treatment
export const getTreatmentStructure = () => {
    return (
        {
            "blocks": [
                {
                    "key": "cl8cd",
                    "text": "MOVIE / SHOW TITLE",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "ati2p",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "eomto",
                    "text": "Your Name / Phone / Email",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "dat7q",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "1vq1k",
                    "text": "LOGLINE",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "5up9h",
                    "text": "-",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "b7d9s",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "7j504",
                    "text": "ACT ONE",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "20sug",
                    "text": "-",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "6ekk1",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "2gcvk",
                    "text": "ACT TWO",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "a31ml",
                    "text": "-",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "6oesl",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "dm2um",
                    "text": "ACT THREE",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "bss53",
                    "text": "-",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "6hvnm",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "23osi",
                    "text": "WRAP-UP",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "ekirk",
                    "text": "-",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                }
            ],
            "entityMap": {}
        }
    );
}


export const structureTreatmentResponse = (data) => {
    return (
        {
            "blocks": [
                {
                    "key": "cl8cd",
                    "text": "TITLE: " + data.Title,
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "ati2p",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "eomto",
                    "text": "Your Name / Phone / Email",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "dat7q",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "1vq1k",
                    "text": "LOGLINE",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "5up9h",
                    "text": "- " +  data.Logline,
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "b7d9s",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "7j504",
                    "text": "ACT ONE",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "20sug",
                    "text": "- " + data.Action1,
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "6ekk1",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "2gcvk",
                    "text": "ACT TWO",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "a31ml",
                    "text": "- " + data.Action2,
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "6oesl",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "dm2um",
                    "text": "ACT THREE",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "bss53",
                    "text": "- " + data.Action3,
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "6hvnm",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "23osi",
                    "text": "WRAP-UP",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "ekirk",
                    "text": "- " + data["Wrap Up"],
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                }
            ],
            "entityMap": {}
        }
    );
}