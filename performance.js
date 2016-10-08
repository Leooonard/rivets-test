window.onload = function () {
    let rivetsData = {
        text: 'rivets.js',
        now: Date.now()
    };
    function bindRivets () {
        let test1 = document.querySelector("#test1");

        rivets.bind(test1, {
            item: rivetsData
        });
    }

    let knockoutViewModel = {
        text: ko.observable('knockout.js'),
        now: ko.observable(Date.now())
    };
    function bindKnockout () {
        let test2 = document.querySelector("#test2");

        ko.applyBindings(knockoutViewModel, test2);
    }

    bindRivets();
    bindKnockout();

    var React = require('react');
    var ReactDOM = require('react-dom');
    let context = undefined;

    var Hello = React.createClass({
        getInitialState: function () {
            return {
                text: "react.js",
                now: Date.now()
            };
        },
        componentDidMount: function () {
            context = this;
        },
        render: function() {
            return (
                <div>
                    <span>{this.state.now}</span>
                </div>
            );
        }
    });

    let test3 = document.querySelector("#test3");
    ReactDOM.render(
        <Hello/>,
        test3
    );

    let text = document.querySelector("#text");
    let now = document.querySelector("#now");
    function bindVanilla () {
        text.textContent = "vanilla javascript";
        now.textContent = Date.now();
    }

    bindVanilla();

    function testRivets () {
        rivetsData.now = Date.now();
    }

    function testKnockout () {
        knockoutViewModel.now(Date.now());
    }

    function testReact () {
        context.setState({
            now: Date.now()
        });
    }

    function testVanilla () {
        now.textContent = Date.now();
    }

    let suite = new Benchmark.Suite();
    suite.add("test rivets", function () {
        testRivets();
    }).add("test knockout", function () {
        testKnockout();
    }).add("test react", function () {
        testReact();
    }).
    add("test vanilla", function () {
        testVanilla();
    }).on('cycle', function(event) {
        console.log(String(event.target));
    })
    .on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    .run({ 'async': true });
}
