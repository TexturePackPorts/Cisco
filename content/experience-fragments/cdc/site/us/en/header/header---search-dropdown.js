export const content = `<div class="root responsivegrid">


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="global-search global search aem-GridColumn aem-GridColumn--default--12"><section id="fw-c-global-search" class="fw-c-search --global-search" is="cdc-global-search" role="search">
    <div id="fw-c-global-search__container" class="fw-c-search__container">
        <form action="https://search.cisco.com" accept-charset="UTF-8" autocomplete="off" class="fw-c-search__form" id="fw-c-global-search__form" name="fw-c-search__form" method="get" role="search">
    <div class="fw-c-search__form-inputs">
        <label for="fw-c-global-search__form-phrase" name="search" id="fw-c-global-search__form-phrase-label" class="fw-c-search__form-phrase-label">Search field edit, type in text</label>
        <input type="text" aria-activedescendant="" aria-labelledby="fw-c-global-search__form-phrase-label" aria-autocomplete="both" aria-describedby="fw-c-global-search__screenreader-instruction" aria-expanded="false" aria-haspopup="listbox" aria-controls="fw-c-global-search__typeahead" autocapitalize="off" autocomplete="off" autocorrect="off" class="fw-c-search__form-phrase" id="fw-c-global-search__form-phrase" maxlength="275" name="query" placeholder="Search" role="combobox" spellcheck="false"/>
        <input type="hidden" name="locale" class="fw-c-search__attribute --locale" value=""/>
<input type="hidden" name="bizcontext" class="fw-c-search__attribute --bizcontext" value=""/>
<input type="hidden" name="cat" value=""/>
<input type="hidden" name="mode" value="text"/>
<input type="hidden" name="clktyp" value="enter"/>
<input type="hidden" name="autosuggest" value="false"/>
<input type="hidden" name="istadisplayed" class="fw-c-search__attribute --istadisplayed" value="false"/>
<input type="hidden" name="tareqid" class="fw-c-search__attribute --tareqid" value=""/>
<input type="hidden" name="categoryvalue" class="fw-c-search__attribute --categoryvalue" value=""/>
    </div>
    <div class="fw-c-search__form-buttons"><button type="button" id="fw-c-global-search__button--clear" aria-label="Clear" class="fw-c-search__form-button --clear --hidden cmp-button" title="Clear">
    <span class="cmp-button__icon"><svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><use href="#svg-x" stroke="#1b1c1d" stroke-width="2px"/></svg></span>
    <span class="cmp-button__text">Clear</span>
</button>
<button type="button" id="fw-c-global-search__form-button--speech-to-text" class="fw-c-search__form-button --speech-to-text --hidden" aria-label="Speech-to-Text" title="Speech-to-Text" data-placeholder="Say something to search">
    <span class="cmp-button__icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="36" viewBox="0 0 20 36" class="fw-c-search__form-button-icon --speech-to-text --primary" role="img"><path fill="none" fill-rule="evenodd" stroke="var(--color-gray-80)" stroke-linecap="round" stroke-width="2" d="M5.35 13.284V7.113C5.35 4.301 7.651 2 10.463 2c2.812 0 5.113 2.301 5.113 5.113v10.221c0 2.813-2.301 5.113-5.113 5.113-2.812 0-5.113-2.3-5.113-5.113L2 17.641a8.463 8.463 0 1 0 16.926 0M10 27v7.583"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="37" viewBox="0 0 32 37" class="fw-c-search__form-button-icon --speech-to-text --error" role="img"><path fill="none" fill-rule="evenodd" stroke="var(--color-gray-80)" stroke-linecap="round" stroke-width="2" d="M10.35 14.284V8.113C10.35 5.301 12.651 3 15.463 3c2.812 0 5.113 2.301 5.113 5.113v10.221c0 2.813-2.301 5.113-5.113 5.113-2.812 0-5.113-2.3-5.113-5.113L7 18.641a8.463 8.463 0 1 0 16.926 0M15 28v7.583M1.5 30.5L29.66 2.34"/></svg>
    </span>
    <span class="cmp-button__text">Speech-to-Text</span>
</button>
<button type="submit" id="fw-c-global-search__form-button--submit" aria-label="Search" title="Search" class="fw-c-search__form-button --submit cmp-button">
    <span class="cmp-button__icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" class="fw-c-search__form-button-icon --submit" role="img" aria-labelledby="fw-c-search__form-button-title--submit">
            <title id="fw-c-global-search__form-button-title--submit">Search</title><path d="M18.694 24.496a9.988 9.988 0 01-3.55.648c-5.524 0-10.002-4.477-10.001-10 0-5.524 4.477-10.002 10-10.001 5.524 0 10.001 4.477 10.001 10 0 2.721-1.177 5.256-2.94 7.06l7.92 7.92" stroke="var(--color-white-100)" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linejoin="round"/>
        </svg>
    </span>
    <span class="cmp-button__text">Search</span>
</button></div>
</form>
        <div id="fw-c-global-search__typeahead" class="fw-c-search__typeahead"><template id="fw-c-global-search__typeahead-list-template">
    <ul aria-multiselectable="false" class="fw-c-search__typeahead-list" id="fw-c-global-search__typeahead-list" role="listbox"></ul>
</template>

<template id="fw-c-global-search__typeahead-group-template">
    <li>
        <ul aria-label=""></ul>
    </li>
</template>

<template id="fw-c-global-search__typeahead-categorized-heading-template">
    <div class="fw-c-search__typeahead-result-categorized-heading"><span></span><hr/></div>
</template>

<template id="fw-c-global-search__typeahead-result-template">
    <li role="option" aria-selected="false" id="fw-c-global-search__typeahead-result--#" class="fw-c-search__typeahead-result"><span></span></li>
</template>


 
 
</div>
        <div id="fw-c-global-search__messages" class="fw-c-search__messages"><div class="fw-c-search__message --speech-to-text-powered-by">Speech-to-Text Powered By Google Speech API</div>
<div class="fw-c-search__message --no-speech-to-text">We didn&#39;t hear that. Try again.</div>
<div class="fw-c-search__message --speech-to-text-error">Speech-to-Text Search is currently unavailable</div>
<div class="fw-c-search__message --screenreader-text" aria-live="polite" data-screenreader-instruction="When autocomplete results are available, use up and down arrows to review and enter to select." data-screenreader-after-result="The search type ahead list contains $RESULTSLENGTH$ results. Use up and down arrow keys to review the results."></div></div>
    </div>
    <div id="fw-c-global-search__quick-links" class="fw-c-search__quick-links">
    <div id="static-af02a5da0c" class="cds-c-static-list" data-config-metrics-group="Search Quicklinks" data-config-metrics-title="Search Quicklinks" data-c-version="DM:Static List:V2.1.0">

	
	<ul class="cds-c-static-list__itemlist">
        <li class="cds-c-static-list__item ">
            
            <a class="cds-c-static-list__link" href="https://software.cisco.com/download/navigator.html" data-config-metrics-item="Downloads" target="_self">Downloads</a>
            
        </li>
    
        <li class="cds-c-static-list__item ">
            
            <a class="cds-c-static-list__link" href="https://www.cisco.com/c/en/us/training-events/training-certifications.html" data-config-metrics-item="Certifications" target="_self">Certifications</a>
            
        </li>
    
        <li class="cds-c-static-list__item ">
            
            <a class="cds-c-static-list__link" href="https://www.cisco.com/c/en/us/solutions/enterprise/design-zone/index.html" data-config-metrics-item="Design Guides" target="_self">Design Guides</a>
            
        </li>
    
        <li class="cds-c-static-list__item ">
            
            <a class="cds-c-static-list__link" href="https://learninglocator.cloudapps.cisco.com/#/home" data-config-metrics-item="Training" target="_self">Training</a>
            
        </li>
    
        <li class="cds-c-static-list__item ">
            
            <a class="cds-c-static-list__link" href="https://community.cisco.com/" data-config-metrics-item="Community" target="_self">Community</a>
            
        </li>
    
        <li class="cds-c-static-list__item ">
            
            <a class="cds-c-static-list__link" href="https://www.cisco.com/c/en/us/about/careers.html" data-config-metrics-item="Careers" target="_self">Careers</a>
            
        </li>
    </ul>

</div>

    

</div>
</section></div>

    
</div>
</div>
 
 `;
 