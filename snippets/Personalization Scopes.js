const personalizationScopes = {
    scopes: ['test-new-mbox', 'nonglobal-mbox', '__view__'],
}

// IF YOU WANT SELECTORS TIED TO YOUR SCOPES, USE THE FOLLOWING
personalizationScopes.meta = {
    'test-new-mbox': {
        selector: "head",
        actionType: "setHtml"
    },
    'nonglobal-mbox': {
        selector: "head",
        actionType: "setHtml"
    },
    '__view__': {
        selector: "head",
        actionType: "setHtml"
    }
    
}


return personalizationScopes