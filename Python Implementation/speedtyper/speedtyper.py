"""SpeedTyper is a web app that tests your typing speed.
    Copyright (C) 2017 Tyler McKean

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
"""

# Imports
import pygame
import time
from multiprocessing import Process

from GUI.MainWindow import MainWindow


class SpeedTyper:
    test_string = ""

    def __init__(self):
        self.test_string = "Hello, World! Type this text!"
        self.words = len(self.test_string) / 5.0

    @staticmethod
    def is_ready():
        user_ready = raw_input("Please type 'ready' when you want to begin\n")
        return user_ready == 'ready'

    @staticmethod
    def welcome():
        return "Hello and welcome to SpeedTyper!"

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
        pygame.init()
        window = MainWindow(self.test_string)
        window.textWindow()
        """
        print self.welcome()
        while not self.is_ready():
            time.sleep(1)
        self.countdown()
        start_time = time.time()
        user_type = raw_input(self.test_string + "\n" + "Your input: \n")
        end_time = time.time()
        elapsed_time = self.calculate_time(start_time, end_time)
        results = self.calculate_wpm(elapsed_time, user_type)
        self.score(elapsed_time, results)
        """
    def play2(self):
        pygame.init()
        window2 = MainWindow(self.test_string)
        time.sleep(2)
        window2.run()

if __name__ == '__main__':
    game1 = SpeedTyper()
    game2 = SpeedTyper()
    p1 = Process(target=game1.play())
    p1.start()
    p1.join()
    p2 = Process(target=game2.play2())
    p2.join()


    """
    thread1 = threading.Thread(name="Window 1", target=game1.play())
    thread2 = threading.Thread(name ="Window 2", target=game2.play2())
    #thread1.start()
    #thread2.start()
    """
