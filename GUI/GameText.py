import pygame

class GameText():
    def __init__(self, text):
        pygame.font.init()
        self.font = pygame.font.SysFont('Arial', 30)
        self.text = text

    def createText(self):
        return self.font.render(self.text, False, (0, 0, 0))
