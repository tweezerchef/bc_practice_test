/* global chai sinon */
'use strict';
mocha.setup('bdd');

const assert = window.assert = chai.assert;
const expect = window.expect = chai.expect;
const should = window.should = chai.should();
const spy = sinon.spy(console, 'log');
/* globals test */

describe('The Unoffical Bootcamp Exam of Planet Earth', function () {
    let numberOfContestants = 14;
    let numberOfDogs = 10;
    let numberOfVotes = 1390;
    let topDogs = [{
        redAge: 26,
        redClass: "red",
        redName: "Higgs",
        redSpecies: "dog",
        redVotes: 200,
        redWeight: 0.00001
    }, {
        yellowAge: 12,
        yellowClass: "yellow",
        yellowName: "Lepton",
        yellowSpecies: "dog",
        yellowVotes: 175,
        yellowWeight: 15,
    }, {
        greenAge: 59,
        greenClass: "green",
        greenName: "Howlling Winds Sr.",
        greenSpecies: "dog",
        greenVotes: 201,
        greenWeight: 101,
    }]
     beforeEach(function(){
            let copyOfFilteredDogs = null;
        })
    
    
    describe('greeting', function () {
        beforeEach(function(){
            var greetingCall = null;
            var greeting = null;
        })
            let greetingCall = greeting("Hello everyone, welcome!", "We are on planet KaleLin", "the show will start soon.")

        it(`should be a function`, function () {
            expect(typeof greeting === "function").to.be.true;
        });
        it(`should log the proper message with spaces`, function () {
            // expect(/\(\ ?num1\,\ ?num2\ ?\)/.test(add.toString())).to.be.true;
            greetingCall;
            expect(spy.calledWith('Hello everyone, welcome! We are on planet KaleLin the show will start soon.')).to.be.true;
        });
    });
    
    describe('contestants', function () {
        beforeEach(function(){
            contestants = null;
            contestantsCall = null;
        })
        let contestantsCall = contestants(dogs);

        it(`should be a function`, function () {
            expect(typeof contestants === "function").to.be.true;
        });
        it(`should return the length of our array`, function(){
            expect(contestants(dogs)).to.equal(numberOfContestants);
        })
    });

    describe('filterSpecies', function () {
        beforeEach(function(){
            filterSpecies = null;
        })
        it(`should be an array'`, function () {
            expect(filterSpecies).to.be.an('array');
        });
        it(`all animals should be a dog`, function () {
            filterSpecies.forEach(item => {
                item.should.have.property('species', "dog");
            });
            expect(filterSpecies).to.have.lengthOf(numberOfDogs)
        });
    });

    describe('dogContestants', function () {
        // let copyOfFilteredDogs = [...filterSpecies]
        it(`should have the same length of the "filterSpecies" array`, function () {
            expect(filterSpecies.length).to.equal(dogContestants.length);
        });
        it(`should be a copy of the "filterSpecies" array`, function () {
            expect(JSON.stringify(filterSpecies)).to.equal(JSON.stringify(dogContestants));
        });
    });

    describe('dogsWithClasses', function () {
        it(`should have an added property of "class"`, function () {
            dogsWithClasses.forEach(dog => {
                dog.should.have.property('class');
            })
        });
        it(`should have the correct amount of dogs in each class`, function () {
            expect(dogsWithClasses.filter(dog => dog.class === "green").length).to.equal(3)
        });
        it(`should have the correct amount of dogs in each class`, function () {
            expect(dogsWithClasses.filter(dog => dog.class === "yellow").length).to.equal(2)
        });
        it(`should have the correct amount of dogs in each class`, function () {
            expect(dogsWithClasses.filter(dog => dog.class === "red").length).to.equal(5)
        });
    });

    describe('firstInClass', function () {
        firstInClass(topDogs)
        it('should use recursion by calling self', function () {
            let firstInClassHold = firstInClass;
            firstInClass = sinon.spy(firstInClass);
            firstInClass(topDogs);
            expect(firstInClass.callCount).to.be.above(1);
            firstInClass = firstInClassHold;
        });
        it('should have an output of an object', function () {
            expect(firstInClass(topDogs)).to.be.an('object')
        })
        it(`should contain the correct properties`, function () {
            expect(firstInClass(topDogs)).to.have.property("redAge");
            expect(firstInClass(topDogs)).to.have.property("yellowAge");
            expect(firstInClass(topDogs)).to.have.property("greenAge");
        })

    });
    
    describe('votes', function () {
        it(`should be a number`, function () {
            expect(votes).to.be.a('number');
        });
        it(`should return the total number of votes for all species`, function () {
            expect(votes).to.equal(numberOfVotes)
        });
    });
});