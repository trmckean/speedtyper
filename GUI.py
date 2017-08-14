import sys
import pygame
from pygame.locals import *

class MainWindow():
    def __init__(self):
        self.black = (0,0,0)
        self.width = 300
        self.height = 300
        self.screen = pygame.display.set_mode((self.width, self.height))

    def run(self):
        pygame.display.set_caption('Tutorial 1')
        self.screen.fill(self.black)

        pygame.display.flip()

        running = True
        while running:
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    running = False

if __name__ == '__main__':
    game = MainWindow()
    game.run()