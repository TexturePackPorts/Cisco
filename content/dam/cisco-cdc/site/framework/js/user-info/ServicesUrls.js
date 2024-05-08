export const SERVICES_URLS = {
    cps: {
        type: 'Service',
        attributeKeys: ['contact'],
        url: {
            guest: 'mktcs.cloudapps.cisco.com/visitor/profile'
        }
    },
    pps: {
        type: 'Service',
        attributeKeys: ['contact'],
        url: {
            auth: 'pps.cisco.com/search/contact',
            guest: 'pps.cisco.com/search/guest'
        }
    },
    vps: {
        type: 'Service',
        attributeKeys: ['response', 'attributes'],
        credentials: 'omit',
        url: {
            auth: 'cdcvps.cloudapps.cisco.com/support/cdcvps/api/virtualprofile',
            guest: 'cdcvps.cloudapps.cisco.com/support/cdcvps/virtualprofile'
        }
    },
    cinf: {
        type: 'Service',
        attributeKeys: ['response', 'attributes'],
        credentials: 'omit',
        url: {
            auth: 'cdces.cisco.com/cdces/ex/cco/profile',
            guest: 'cdcvps.cloudapps.cisco.com/support/cdcvps/virtualprofile?groupName=wem',
        }
    },
    cdp: {
        type: 'Service',
        attributeKeys: false,
        url: {
            guest: 'rtamexp.cisco.com/ex/vp/aum',
        }
    },
    phl: {
        type: 'Service',
        attributeKeys: ['response', 'attributes'],
        credentials: 'omit',
        url: {
            auth: 'cdcvps.cloudapps.cisco.com/support/cdcvps/api/virtualprofile?groupName=partnerhelpline',
            guest: 'cdcvps.cloudapps.cisco.com/support/cdcvps/virtualprofile?groupName=partnerhelpline',
        }
    },
    dcloud: {
        type: 'Service',
        attributeKeys: ['response', 'attributes'],
        credentials: 'omit',
        url: {
            auth: 'cdcvps.cloudapps.cisco.com/support/cdcvps/api/virtualprofile?groupName=dcloudprofile'
        }
    },
    dsc: {
        type: 'Service',
        attributeKeys: false,
        headers:{
            apikey: 'GlGxBjenf1a5wobYLANWWGmNur1zklAD'
        },
        url: {
            guest: 'dsc.cisco.com/v1/netid'
        }
    },
    customer: {
        type: 'Service',
        attributeKeys: false,
        headers:{
            apikey: 'aD5KX2z9BaU0XDATTccd4IEw6CfXs1PE'
        },        
        url: {
            guest: 'dsc.cisco.com/v1/netid/cdc_cloud'
        }
    },
    locale: {
        type: 'Locale',
        attributeKeys: ['X-Akamai-Edgescape'],
        url: {
            guest: 'www.cisco.com/web/fw/co/i/s.gif'
        }
    }
};