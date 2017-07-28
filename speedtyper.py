# Prototype for Speed Typing game written in Python
# Tyler McKean

# Imports
import time

class SpeedTyper:
    test_string = ""

    def __init__(self):
        self.test_string = "We the People of the United States, in Order to form a more perfect Union, establish " \
                           "Justice, insure domestic Tranquility, provide for the common defence, promote the " \
                           "general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, " \
                           "do ordain and establish this Constitution for the United States of America."
        self.words = len(self.test_string) / 5.0

    @staticmethod
    def is_ready():
        user_ready = raw_input("Please type 'ready' when you want to begin\n")
        return user_ready == 'ready'

    @staticmethod
    def welcome():
        print "Hello and welcome to SpeedTyper!"

    @staticmethod
    def countdown():
        print "Get ready to type in the phrase when it appears in 5 seconds!"

        for i in range(5):
            print 5 - i
            time.sleep(1)

    @staticmethod
    def calculate_time(start_time, end_time):
        return end_time - start_time

    def calculate_wpm(self, elapsed_time, user_type):
        analysis = []
        gross_wpm = self.words / (elapsed_time / 60)
        errors = sum([int(i != j) for i, j in zip(self.test_string, user_type)])
        net_wpm = gross_wpm - (errors / (elapsed_time / 60))
        analysis.append(gross_wpm)
        analysis.append(net_wpm)
        analysis.append(errors)
        return analysis

    @staticmethod
    def format(result):
        return "{0:.2f}".format(result)

    def score(self, elapsed_time, results):
        print "You typed the phrase in {0} seconds at a speed of {1} Gross WPM and {2} Net WPM with {3} uncorrected " \
              "errors!".format(self.format(elapsed_time), self.format(results[0]),
                               self.format(results[1]), self.format(results[2]))

    def play(self):
        self.welcome()
        while not self.is_ready():
            time.sleep(1)
        self.countdown()
        start_time = time.time()
        user_type = raw_input(self.test_string + "\n" + "Your input: \n")
        end_time = time.time()
        elapsed_time = self.calculate_time(start_time, end_time)
        results = self.calculate_wpm(elapsed_time, user_type)
        self.score(elapsed_time, results)

if __name__ == '__main__':
    game = SpeedTyper()
    game.play()
