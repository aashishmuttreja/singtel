var require = {
    cms: true, 
    waitSeconds:30,
    urlArgs: "v=202009171232",
    shim:{
        // work around jquery whitespace problem
        'jquery':['jquery-orig'],

        'jquery.ui':['jquery'],
        'jqueryjson':['jquery'],

        'fixture.object':['jquery'],
        'fixture.string':['jquery'],
        'fixture.dom':['jquery' , 'fixture.string', 'fixture.object'],
        //'l9_common.fixture':['fixture.dom', 'fixture.lightsaber'],
        //'l3_common.fixture' : ['l9_common.fixture'],
        //'fixture' : ['l3_common.fixture'],
        'fixture' : ['l3_common.fixture'],
        'l3_common.fixture' : ['core.fixture'],
        'core.fixture' : ['fixture.dom', 'fixture.lightsaber'],

        'fixture.lightsaber':['jquery'],
        'foundation': ['jquery', 'moment'],

        'carousel':['jquery'],
        'flexigrid':['jquery.ui'],
        'highcharts':['jquery'],

        'replace':['text', 'i18n'],
        'recaptcha':{ exports:'Recaptcha' },
        'balloon':['jquery'],
        'timepicker':['jquery'],
        'mobiscroll.core':['jquery'],
        'mobiscroll.datetime':['mobiscroll.core'],
        'jquery.placeholder': {
            deps: ['jquery'],
            exports: 'jQuery'
        },
        'lightsaber':['repository.lightsaber.custom', 'preload.utils', 'jquery.placeholder'],
        //'UXFLoginService' : ['lightsaber','fixture'], // needed in case the login service is called before the experience package is loaded
        'jasmine':{
            exports:'jasmine'
        },
        'jasmine.html':{
            deps:['jasmine'],
            exports:'jasmine'
        },
        'jasmine.async':{
            deps:['jasmine']
        },

        'l0.commerceExpPackage': ['repository.lightsaber.custom'],
        'l0.careExpPackage': ['repository.lightsaber.custom'],
        'l0.supportExpPackage': ['repository.lightsaber.custom'],
        'l0.billingCareExpPackage': ['repository.lightsaber.custom'],

        'commerceExpPackage': ['l3_common.commerce.custom'],
        'careExpPackage': ['l3_common.care.custom'],
        'billingCareExpPackage': ['l3_common.billingCare.custom'],
        'supportExpPackage': ['l3_common.support.custom'],        
        

        'l3_common.commerce.custom': ['l9_common.commerce.custom'],
        'l3_common.care.custom': ['l9_common.care.custom'],
        'l3_common.billingCare.custom': ['l9_common.billingCare.custom'],
        'l3_common.support.custom': ['l9_common.support.custom']        

    },
    paths: {
        'text':'businesswidget/repository_l9_common/common/utils/text.min',
        'i18n': 'businesswidget/repository/common/lib/requirejs/i18n.min',
        'tpl': 'businesswidget/repository/common/lib/requirejs_ext/tpl.min',
        'replace': 'businesswidget/repository/common/lib/requirejs_ext/replace.min',
        'exclude': 'businesswidget/repository/common/lib/requirejs_ext/exclude.min',
        'single': 'businesswidget/repository/common/lib/requirejs_ext/single.min',
        'sync': 'businesswidget/repository/common/lib/requirejs_ext/sync.min',
        'init': 'businesswidget/repository/common/lib/requirejs_ext/init.min',
        // work around jquery whitespace problem
        'jquery-orig':'businesswidget/repository/common/lib/jquery/jquery-1.9.1.min',
        'jquery':'businesswidget/repository/common/lib/jquery/jquery-whitespace-plugin.min',
        'jquery.placeholder': 'businesswidget/repository/common/lib/jquery/jquery.placeholder.min',
        'foundation':'https://cdnjs.cloudflare.com/ajax/libs/foundation/5.5.2/js/foundation',
        'moment':'businesswidget/repository_l9_common/common/utils/moment.min',
        'underscore':'businesswidget/repository/common/lib/underscore/amd/underscore.min',
        'backbone':'businesswidget/repository/common/lib/backbone/amd/backbone.min',
        'jquery.ui':'businesswidget/repository/common/lib/jquery_ui/jquery-ui-1.10.3.min',
        'jqueryjson':'businesswidget/repository/common/lib/jquery/jquery.json-2.3.min',
        'fixture.object':'businesswidget/repository/common/lib/fixture/jquery.lang.object.min',
        'fixture.string':'businesswidget/repository/common/lib/fixture/jquery.lang.string.min',
        'fixture.dom':'businesswidget/repository/common/lib/fixture/jquery.dom.fixture.min',
        'fixture.lightsaber':'businesswidget/repository/common/lib/fixture/jquery.lightsaber.fixture.extension.min',
        'lightsaber':'businesswidget/repository/common/lib/lightsaber/web/lightsaber.min',
        'lightsaber.widgets':'businesswidget/repository/common/lib/lightsaber/web/lightsaber.widgets.min',
        'jqplot':'businesswidget/repository/common/lib/jqplot/jquery.jqplot.min',
        'jqplot.pointLabels':'businesswidget/repository/common/lib/jqplot/jqplot.pointLabels.min',
        'jqplot.categoryAxisRenderer':'businesswidget/repository/common/lib/jqplot/jqplot.categoryAxisRenderer.min',
        'jqplot.canvasTextRenderer':'businesswidget/repository/common/lib/jqplot/jqplot.canvasTextRenderer.min',
        'jqplot.canvasOverlay':'businesswidget/repository/common/lib/jqplot/jqplot.canvasOverlay.min',
        'jqplot.barRenderer':'businesswidget/repository/common/lib/jqplot/jqplot.barRenderer.min',
        'jqplot.pieRenderer':'businesswidget/repository/common/lib/jqplot/jqplot.pieRenderer.min',
        'carousel':'businesswidget/repository/common/lib/carousel/carousel',
        'flexigrid':'businesswidget/repository/common/lib/flexigrid/js/flexigrid.min',
        'highcharts':'businesswidget/repository/common/lib/highcharts/highcharts.src',
        'number.formatter':'businesswidget/repository/common/lib/number.formatter/format.20110630-1100.min',
        
        //'l9_common.fixture':'businesswidget/repository_l9_common/common/fixture/fixtures',
        'fixture':'businesswidget/repository_l9_common/common/fixture/fixtures',
        'l3_common.fixture':'businesswidget/repository_l3_common/common/fixture/fixtures',
        //'fixture':'businesswidget/repository/common/fixture/fixtures',
        'core.fixture':'businesswidget/repository/common/fixture/fixtures',
        'recaptcha':'//www.google.com/recaptcha/api/js/recaptcha_ajax',
        'balloon':'businesswidget/repository/common/lib/jquery.balloon/jquery.balloon.min',
        'timepicker':'businesswidget/repository/common/lib/jquery_ui.timepickerAddon/jquery-ui-timepicker-addon',
        'knockout':'businesswidget/repository/common/lib/knockout/knockout.min',
        'knockout.mapping':'businesswidget/repository/common/lib/knockout/knockout.mapping.min',
        'knockout.validation':'businesswidget/repository/common/lib/knockout/knockout.validation.min',
        
        //facebook
		'facebook':'businesswidget/repository/common/lib/facebook/facebook-debug',
		"UserInformationViewModel":"businesswidget/repository/common/viewmodel/UserInformationViewModel",
        'mobiscroll.core':'businesswidget/repository/common/lib/mobiscroll/mobiscroll.core.min',
        'mobiscroll.datetime':'businesswidget/repository/common/lib/mobiscroll/mobiscroll.datetime.min',

        'lightsaber.config':'businesswidget/repository/common/config/config',
        'repository.config':'businesswidget/repository/common/config/repository.config',
		'repository.lightsaber.custom':'businesswidget/repository_l9_common/common/config/l9_repository.lightsaber.custom',
        'l3_common.repository.config': 'businesswidget/repository_l3_common/common/config/l3_common.repository.config',
        'l9_common.repository.config': 'businesswidget/repository_l9_common/common/config/l9_common.repository.config',

        'preload.utils' : 'businesswidget/repository/common/lib/util/preload.min',
        'commerceExpPackage':'businesswidget/repository/common/library/web/commerceExpPackage',
        'careExpPackage':'businesswidget/repository/common/library/web/careExpPackage',
        'billingCareExpPackage':'businesswidget/repository/common/library/web/billingCareExpPackage',
        'supportExpPackage':'businesswidget/repository/common/library/web/supportExpPackage',

        'singtelOsgExpPackage':'businesswidget/repository_l9_common/common/config/l9_common.singtelOsg.custom',

        'l3_common.commerce.custom':'businesswidget/repository_l3_common/common/config/l3_common.commerce.custom-min',
        'l3_common.care.custom':'businesswidget/repository_l3_common/common/config/l3_common.care.custom-min',
        'l3_common.billingCare.custom':'businesswidget/repository_l3_common/common/config/l3_common.billingCare.custom-min',
        'l3_common.support.custom':'businesswidget/repository_l3_common/common/config/l3_common.support.custom-min',

        'l9_common.commerce.custom': 'businesswidget/repository_l9_common/common/config/l9_common.commerce.custom-min',
        'l9_common.care.custom': 'businesswidget/repository_l9_common/common/config/l9_common.care.custom-min',
        'l9_common.billingCare.custom': 'businesswidget/repository_l9_common/common/config/l9_common.billingCare.custom-min',
        'l9_common.support.custom': 'businesswidget/repository_l9_common/common/config/l9_common.support.custom-min',
        

        /** Development-time mappings start */

        'l9_common.commerceExpPackage':'businesswidget/repository_l9_common/common/library/web/l9_common.commerceExpPackage',
        'l9_common.commerceWidgets':'businesswidget/repository_l9_common/common/library/web/l9_common.commerceWidgets',
        'l9_common.commerceTopics':'businesswidget/repository_l9_common/common/library/web/l9_common.commerceTopics',
        'l9_common.commerceTopicsBinding':'businesswidget/repository_l9_common/common/library/web/l9_common.commerceTopicsBinding',

        'l9_common.careExpPackage':'businesswidget/repository_l9_common/common/library/web/l9_common.careExpPackage',
        'l9_common.careWidgets':'businesswidget/repository_l9_common/common/library/web/l9_common.careWidgets',
        'l9_common.careTopics':'businesswidget/repository_l9_common/common/library/web/l9_common.careTopics',
        'l9_common.careTopicsBinding':'businesswidget/repository_l9_common/common/library/web/l9_common.careTopicsBinding',

        'l9_common.billingCareExpPackage':'businesswidget/repository_l9_common/common/library/web/l9_common.billingCareExpPackage',
        'l9_common.billingCareWidgets':'businesswidget/repository_l9_common/common/library/web/l9_common.billingCareWidgets',
        'l9_common.billingCareTopics':'businesswidget/repository_l9_common/common/library/web/l9_common.billingCareTopics',
        'l9_common.billingCareTopicsBinding':'businesswidget/repository_l9_common/common/library/web/l9_common.billingCareTopicsBinding',

        'l9_common.supportExpPackage':'businesswidget/repository_l9_common/common/library/web/l9_common.supportExpPackage',
        'l9_common.supportWidgets':'businesswidget/repository_l9_common/common/library/web/l9_common.supportWidgets',
        'l9_common.supportTopics':'businesswidget/repository_l9_common/common/library/web/l9_common.supportTopics',
        'l9_common.supportTopicsBinding':'businesswidget/repository_l9_common/common/library/web/l9_common.supportTopicsBinding',

        //'singtelOsgExpPackage': 'businesswidget/repository_l9_common/common/library/web/l9_common.singtelOsgExpPackage',
        'l9_common.singtelOsgExpPackage':'businesswidget/repository_l9_common/common/library/web/l9_common.singtelOsgExpPackage',
        'l9_common.singtelOsgWidgets':'businesswidget/repository_l9_common/common/library/web/l9_common.singtelOsgWidgets',
        'l9_common.singtelOsgTopics':'businesswidget/repository_l9_common/common/library/web/l9_common.singtelOsgTopics',
        'l9_common.singtelOsgTopicsBinding':'businesswidget/repository_l9_common/common/library/web/l9_common.singtelOsgTopicsBinding',
        'l9_common.singtelOsg.custom': 'businesswidget/repository_l9_common/common/config/l9_common.singtelOsg.custom.min',
        'experiencePackage': 'businesswidget/repository/common/library/web/accountManagementExpPackage', // workaround for testing

        /** Development-time mappings end */

        /** Jasmine & plugins **/
        'jasmine':'businesswidget/repository/common/lib/jasmine/jasmine',
        'jasmine.html':'businesswidget/repository/common/lib/jasmine/jasmine-html',
        'jasmine.async':'businesswidget/repository/common/lib/jasmine/jasmine-async',

        'jquery.mockjax': 'businesswidget/repository_l9_common/common/lib/mockjax/jquery.mockjax',

        /* ASCF integration */
        'ASCFAdapter' : 'businesswidget/repository/common/lib/ascfConnection/ascfadapter/ASCFAdapter',
        'ASCFAdapter.config' : 'businesswidget/repository/common/lib/ascfConnection/config/ASCFAdapter.config',

        /*Amir start*/
        'bootstrapCss': 'businesswidget/repository/common/lib/bootstrap/bootstrap.min.css',
        'bootstrapThemeCss': 'businesswidget/repository/common/lib/bootstrap/bootstrap-theme.min.css',
        'bootstrap': 'businesswidget/repository/common/lib/bootstrap/bootstrap.min'
        /*Amir end*/
    },

    map: {
        '*': {
            "Configuration": "businesswidget/repository_l9_common/common/core/Configuration"
        }
    }

};
