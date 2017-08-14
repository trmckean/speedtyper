import sys
import pygame
from pygame.locals import *
from GUI.Particle import Particle
from GUI.GameText import GameText
from GUI.TextInput import TextInput
import time


class MainWindow():
    def __init__(self, text):
        self.black = (0,0,0)
        self.white = (255,255,255)
        self.width = 800
        self.height = 800
        self.screen = pygame.display.set_mode((self.width, self.height))
        self.test_string = text
        self.clock = pygame.time.Clock()

    def run(self):
        backspaces = 0
        start_time = time.time()
        textinput = self.text_input()
        self.show_text(self.test_string, 250, 250)
        running = True
        wrong = None
        done = None
        elapsed_time = 0
        while running:
            self.draw_gui()
            if wrong:
                self.show_text("Incorrect, try again!", 250, 350)
            elif done:
                self.show_text("It took you {0} seconds to type the phrase correctly!".format("{0:.2f}".format(elapsed_time)), 250, 350)
            events = pygame.event.get()
            for event in events:
                if event.type == pygame.QUIT:
                    running = False

            if textinput.update(events):
                if textinput.get_text() != self.test_string:
                    wrong = True
                else:
                    wrong = False
                    if not done:
                        end_time = time.time()
                        elapsed_time = end_time - start_time
                    input_string = textinput.get_text()
                    done = True
            self.screen.blit(textinput.get_surface(), (10, 10))

            pygame.display.update()
            self.clock.tick(30)
        pygame.quit()

    def draw_gui(self):
        self.screen.fill(self.white)
        pygame.display.set_caption('Tutorial 1')

        self.draw_circle(self.screen)
        self.draw_rect(self.screen)
        self.show_text(self.test_string, 250, 250)

    def draw_circle(self, screen):
        #pygame.draw.circle(screen, (0,0,255), (150, 50), 15, 1)
        particle = Particle((150, 50), 15)
        particle.display(self.screen)

    def draw_rect(self, screen):
        pygame.draw.rect(screen, (self.black), (125, 100, 50, 50), 1)

    def show_text(self, text, x, y):
        gametext = GameText(text)
        self.screen.blit(gametext.createText(), (x, y))

    def text_input(self):
        textinput = TextInput()
        return textinput

if __name__ == '__main__':
    game = MainWindow()
    game.run()