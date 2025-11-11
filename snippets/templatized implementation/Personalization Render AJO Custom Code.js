// render ajo custom code channels
const renderAjoCustomCode = function(propositions){
    const personalizationSurfaces = _satellite.getVar('Personalization Surfaces')

    try {
        let renderedPropositionsDetails = []
        propositions.forEach(proposition => {
            const isWebChannel = proposition.scope == 'web://' + window.location.host + window.location.pathname
            if( proposition.scopeDetails?.decisionProvider == 'AJO' && !isWebChannel ){
                const surfaceName = proposition.scope.replace('web://' + window.location.host + window.location.pathname, '')
                proposition.items.forEach(item => {
                    if(item.data?.content?.length > 0 && typeof item.data?.content == 'string'){
                        const content = item.data.content;
                        let selector
                        // handle the injection selector if there is a specifically set value
                        if(personalizationSurfaces.hasOwnProperty('meta')){
                            selector = personalizationSurfaces.meta[surfaceName]?.selector || 'head';
                        }
                        else{
                            selector = 'head';
                        }
                        
                        const container = document.querySelector(selector);
                        if(container){
                            const tempContainer = document.createElement('div');
                            tempContainer.innerHTML = content;
                            // turn scripts into elements so they are parsed
                            tempContainer.querySelectorAll('script').forEach(script => {
                                const thisScript = document.createElement('script')
                                thisScript.innerHTML = script.innerHTML
                                script.insertAdjacentElement('afterend', thisScript)
                                script.parentElement.removeChild(script)
                            })
                            // if it's not the document head, empty out the container first
                            if (selector != 'head'){
                                container.innerHTML = ''
                            }
                            // move all elements in
                            while (tempContainer.firstChild) {
                                container.appendChild(tempContainer.firstChild);    
                            }
                        }
                        else{
                            _satellite.logger.error('Error rendering ' + surfaceName + ', element for selector ' + selector + ' does not exist')
                        }
                        
                    }
                })
                proposition.renderAttempted = true
                renderedPropositionsDetails.push({
                    id: proposition.id,
                    scope: proposition.scope,
                    scopeDetails: proposition.scopeDetails
                })
            }
        });
        alloy("sendEvent", {
            xdm: {
                eventType: "decisioning.propositionDisplay",
                _experience: {
                    decisioning: {
                        propositions: renderedPropositionsDetails,
                        propositionEventType: {
                            display: 1
                        }
                    },
                },
            },
        });
        
    } catch (error) {
        _satellite.logger.error('Error with Personalization Render AJO Custom Code', error)
    }
    

}
    
return renderAjoCustomCode