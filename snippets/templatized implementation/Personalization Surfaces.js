const personalizationSurfaces = {
    surfaces: ['#nonglobal-mbox']
}

// IF YOU WANT SELECTORS TIED TO YOUR SURFACES, USE THE FOLLOWING
personalizationSurfaces.meta = {
    '#nonglobal-mbox': {
        selector: "#nonglobal-mbox",
        actionType: "setHtml"
    }
    
}


return personalizationSurfaces