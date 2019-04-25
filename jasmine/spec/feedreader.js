
/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         it('Feed has a URL defined', function() {
            for(var i=0 ; i<allFeeds.length;i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.constructor).toBeDefined(String);
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });




        /* TODO:  test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('Feed has a name defined', function() {
            for(var i=0 ; i<allFeeds.length;i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.constructor).toBeDefined(String);
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });
    });


    /* TODO: This a new test suite named "The menu" */
     describe('The menu', function() {
        /* TODO:  test that ensures the menu element is
         * hidden by default.
         */
        it ('the menu element is hidden by default',function() {
            var hidden =document.body.classList.contains('menu-hidden');
            expect(hidden).toBe(true);
        });
         /* TODO: test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it ('the menu changes visibility when the menu icon is clicked',function() {
            var visibility =document.querySelector('a.menu-icon-link');


            visibility.click();
            expect(document.body.classList.contains('menu-hidden')).toBe(false);
            visibility.click();
            expect(document.body.classList.contains('menu-hidden')).toBe(true);
        });
    });
    /* TODO: This a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* TODO:  test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        beforeEach(function(done) {
            loadFeed(0);
            done();

        });
        it('has entry element in feed container',function() {
            let fcontainer =document.querySelector('div.feed');
            let entryElemnt=fcontainer.querySelectorAll('.feed .entry');
            expect(fcontainer.length).not.toBe(0);
            expect(entryElemnt).toBeDefined();
        });
    });

    /* TODO: This a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* TODO:  test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */

        beforeEach(function(done) {
             
            loadFeed(2,function(){
               firstfeed =document.querySelector('div.feed').innerHTML;

            
                loadFeed(1,function(){
                  secondfeed =document.querySelector('div.feed').innerHTML;
                   done();
                });
            });
        });
       
        it('new feed is loaded by the loadFeed function',function() {
          expect(firstfeed).not.toBe(secondfeed);
        });
    });
}());