from abc import ABC, abstractmethod

class Transformation(ABC):
    
    @abstractmethod
    def generate(self, plan):
        """Take a recharge plan and returns one or more alternative plans."""
        pass