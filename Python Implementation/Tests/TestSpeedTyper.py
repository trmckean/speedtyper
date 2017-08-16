import unittest

from speedtyper import SpeedTyper


class SpeedTyperTests(unittest.TestCase):

    speedtyper = SpeedTyper()

    def testWelcome(self):
        self.assertEqual(self.speedtyper.welcome(), "Hello and welcome to SpeedTyper!")

if __name__ == '__main__':
    unittest.main()